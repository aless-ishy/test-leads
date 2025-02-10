from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from config import CREATE_TABLE
from domain.models.contact import Contact
from infra.database.orm import Base, engine


class ContactEntity(Base):
    __tablename__ = 'contacts'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String)
    phone_number = Column(String)
    email = Column(String)

    leads = relationship("LeadEntity", back_populates="contact")
    leads_view = relationship("LeadViewEntity", back_populates="contact")


if CREATE_TABLE: ContactEntity.metadata.create_all(engine)


def map_contact(contact_entity: ContactEntity):
    if contact_entity is None: return None
    return Contact(
        id=contact_entity.id,
        first_name=contact_entity.first_name,
        phone_number=contact_entity.phone_number,
        email=contact_entity.email
    )
