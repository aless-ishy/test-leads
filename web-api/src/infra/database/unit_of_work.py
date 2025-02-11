from __future__ import annotations
import uuid
from esdbclient import EventStoreDBClient, NewEvent, StreamState

from config import get_esdb_client_uri
from domain.events.event import Event
from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork
from infra.database.orm import SessionLocal
from infra.database.repositories.lead_repository import LeadRepository
from infra.database.repositories.lead_view_repository import LeadViewRepository

client = EventStoreDBClient(uri=get_esdb_client_uri())


class SqlAlchemyUnitOfWork(AbstractUnitOfWork):
    def __init__(self, session_factory=SessionLocal):
        super().__init__()
        self.session_factory = session_factory
        self.leads = LeadRepository(session_factory)
        self.leads_view = LeadViewRepository(session_factory)
        self.stream = str(uuid.uuid4())
        self.version = -1

    def collect_new_events(self):
        while self.events:
            event = self.events.pop(0)
            yield event

    def commit_event(self, event: Event, handler_name: str):
        esdb_event = NewEvent(type=event.__class__.__name__, data=event.to_json_byte(handler_name=handler_name))
        client.append_to_stream(
            stream_name=self.stream,
            current_version=StreamState.NO_STREAM if self.version == -1 else self.version,
            events=[esdb_event],
        )
        self.version += 1
