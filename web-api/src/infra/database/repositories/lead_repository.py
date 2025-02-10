from sqlalchemy import select, update

from domain.models.lead import Lead
from domain.repositories.lead_abstract_repository import LeadAbstractRepository
from infra.database.entity.lead_entity import LeadEntity, map_lead
from infra.database.orm import SessionLocal


class LeadRepository(LeadAbstractRepository):
    def __init__(self, session=SessionLocal):
        super().__init__()
        self.session = session()

    def get_by_id(self, lead_id: int) -> Lead or None:
        leads_entity = select(LeadEntity).where(LeadEntity.id == lead_id)
        for lead_entity in self.session.scalars(leads_entity): return map_lead(lead_entity)
        return None

    def save(self, lead_id, **data):
        query = update(LeadEntity).where(LeadEntity.id == lead_id).values(**data)
        self.session.execute(query)
        self.session.commit()
