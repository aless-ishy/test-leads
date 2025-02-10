from __future__ import annotations

from dataclasses import dataclass


@dataclass(unsafe_hash=True)
class Contact:
    def __init__(self, id: int, first_name: str, phone_number: str, email: str):
        self.id = id
        self.first_name = first_name
        self.phone_number = phone_number
        self.email = email

    def to_dict(self):
        return dict(
            id=self.id,
            first_name=self.first_name,
            phone_number=self.phone_number,
            email=self.email
        )
