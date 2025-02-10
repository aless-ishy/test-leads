from __future__ import annotations

from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork
from infra.database.orm import SessionLocal
from infra.database.repositories.lead_repository import LeadRepository
from infra.database.repositories.lead_view_repository import LeadViewRepository


class SqlAlchemyUnitOfWork(AbstractUnitOfWork):
    def __init__(self, session_factory=SessionLocal):
        super().__init__()
        self.session_factory = session_factory
        self.leads = LeadRepository(session_factory)
        self.leads_view = LeadViewRepository(session_factory)
