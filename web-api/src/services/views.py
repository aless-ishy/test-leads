from domain.models.lead import LeadStatusEnum
from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork


def invited_leads(unit_of_work: AbstractUnitOfWork):
    return unit_of_work.leads_view.get_all(status=None)

def accepted_leads(unit_of_work: AbstractUnitOfWork):
    return unit_of_work.leads_view.get_all(status=LeadStatusEnum.ACCEPTED.value)