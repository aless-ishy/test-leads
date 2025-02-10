from dataclasses import dataclass

from domain.events.event import Event


@dataclass
class AcceptedLeadEvent(Event):
    id: int
    price: float


@dataclass
class DeclinedLeadEvent(Event):
    id: int


@dataclass
class AcceptedLeadSendEmailEvent(Event):
    id: int
