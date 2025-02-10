from sqlalchemy import Column, Integer, String, DateTime, DECIMAL, ForeignKey, literal_column
from sqlalchemy.orm import relationship

from config import CREATE_TABLE
from domain.models.lead import Lead
from infra.database.entity.contact_entity import map_contact
from infra.database.orm import Base, engine


class LeadEntity(Base):
    __tablename__ = 'leads'
    id = Column(Integer, primary_key=True, autoincrement=True)
    suburb = Column(String)
    created_date = Column(DateTime, server_default=literal_column("GETUTCDATE()"))
    contact_id = Column(Integer, ForeignKey('contacts.id'))
    contact = relationship("ContactEntity", back_populates="leads")
    category = Column(String)
    description = Column(String)
    price = Column(DECIMAL(8, 2))
    status = Column(String)


if CREATE_TABLE: LeadEntity.metadata.create_all(engine)


def map_lead(lead_entity: LeadEntity):
    return Lead(
        id=lead_entity.id,
        suburb=lead_entity.suburb,
        created_date=lead_entity.created_date,
        contact_id=lead_entity.contact_id,
        category=lead_entity.category,
        description=lead_entity.description,
        price=float(lead_entity.price),
        status=lead_entity.status,
        contact=map_contact(lead_entity.contact)
    )
