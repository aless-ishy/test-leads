import abc

from domain.models.lead import Lead
from domain.repositories.abstract_repository import AbstractRepository


class LeadViewAbstractRepository(AbstractRepository):
    def __init__(self):
        pass

    @abc.abstractmethod
    def get_all(self, status: str or None) -> [Lead]:
        raise NotImplementedError

    @abc.abstractmethod
    def save(self, lead_id: int, **data):
        raise NotImplementedError