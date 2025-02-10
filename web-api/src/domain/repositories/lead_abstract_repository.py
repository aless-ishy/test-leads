import abc

from domain.models.lead import Lead
from domain.repositories.abstract_repository import AbstractRepository


class LeadAbstractRepository(AbstractRepository):
    def __init__(self):
        pass

    @abc.abstractmethod
    def get_by_id(self, lead_id: int) -> Lead:
        raise NotImplementedError

    @abc.abstractmethod
    def save(self, lead_id: int, **data):
        raise NotImplementedError