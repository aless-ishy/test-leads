from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from enum import Enum

from domain.events import lead_events
from domain.models.contact import Contact


class LeadStatusEnum(Enum):
    ACCEPTED = "Accepted"
    DECLINED = "Declined"


@dataclass(unsafe_hash=True)
class Lead:
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

    def can_change_status_to_accept(self):
        return self.status != LeadStatusEnum.ACCEPTED.value and self.status != LeadStatusEnum.DECLINED.value

    def can_change_status_to_decline(self):
        return self.status != LeadStatusEnum.ACCEPTED.value and self.status != LeadStatusEnum.DECLINED.value

    def can_give_discount(self):
        return self.price > 500

    def apply_discount(self):
        self.price = float(round(self.price * 0.9, 2))

    def accept(self):
        ## if not self.can_change_status_to_accept(): raise Exception("Lead inapto para alteracão do status.")

        if self.can_give_discount(): self.apply_discount()
        accept_event = lead_events.AcceptedLeadEvent(id=self.id, price=self.price)
        return [accept_event]

    def decline(self):
        ## if not self.can_change_status_to_decline(): raise Exception("Lead inapto para alteracão do status.")

        decline_event = lead_events.DeclinedLeadEvent(id=self.id)
        return [decline_event]

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
