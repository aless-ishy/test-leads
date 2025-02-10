from __future__ import annotations
import abc

from domain.events.event import Event
from domain.repositories.lead_abstract_repository import LeadAbstractRepository
from domain.repositories.lead_view_abstract_repository import LeadViewAbstractRepository


class AbstractUnitOfWork(abc.ABC):
    leads: LeadAbstractRepository
    leads_view: LeadViewAbstractRepository
    events: [Event] = []

    def collect_new_events(self):
        while self.events:
            yield self.events.pop(0)