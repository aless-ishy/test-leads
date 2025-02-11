import json
from dataclasses import dataclass

from domain.events.event import Event


@dataclass
class AcceptedLeadEvent(Event):
    id: int
    price: float

    def to_json_byte(self, **extra_data):
        return json.dumps(dict(id=self.id, price=self.price, **extra_data)).encode('utf-8')


@dataclass
class DeclinedLeadEvent(Event):
    id: int

    def to_json_byte(self, **extra_data):
        return json.dumps(dict(id=self.id, **extra_data)).encode('utf-8')


@dataclass
class AcceptedLeadSendEmailEvent(Event):
    id: int

    def to_json_byte(self, **extra_data):
        return json.dumps(dict(id=self.id, **extra_data)).encode('utf-8')
