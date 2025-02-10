from sqlalchemy import select, update

from domain.models.lead import Lead
from domain.repositories.lead_view_abstract_repository import LeadViewAbstractRepository
from infra.database.entity.lead_view_entity import LeadViewEntity, map_lead_view
from infra.database.orm import SessionLocal


class LeadViewRepository(LeadViewAbstractRepository):
    def __init__(self, session = SessionLocal):
        super().__init__()
        self.session = session()

    def get_by_id(self, lead_id: int) -> Lead or None:
        leads_entity = select(LeadViewEntity).where(LeadViewEntity.id == lead_id)
        for lead_entity in self.session.scalars(leads_entity): return map_lead_view(lead_entity)
        return None

    def get_all(self, status) -> [Lead]:
        leads = select(LeadViewEntity).where(LeadViewEntity.status == status)
        return list(map(map_lead_view, self.session.scalars(leads)))

    def save(self, lead_id, **data):
        query = update(LeadViewEntity).where(LeadViewEntity.id == lead_id).values(**data)
        self.session.execute(query)
        self.session.commit()
