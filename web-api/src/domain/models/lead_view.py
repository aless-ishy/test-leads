from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from domain.models.contact import Contact


@dataclass(unsafe_hash=True)
class LeadView:
    def __init__(self, id: int, suburb: str, created_date: datetime, contact_id: int, category: str, description: str,
                 price: float, status: str, contact: Contact):
        self.id = id
        self.suburb = suburb
        self.created_date = created_date
        self.contact_id = contact_id
        self.category = category
        self.description = description
        self.price = price
        self.status = status
        self.contact = contact

    def to_dict(self):
        return dict(
            id=self.id,
            suburb=self.suburb,
            created_date=self.created_date,
            contact_id=self.contact_id,
            category=self.category,
            description=self.description,
            price=self.price,
            contact=self.contact.to_dict() if self.contact is not None else None
        )
