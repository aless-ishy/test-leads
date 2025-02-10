from domain.models.lead import LeadStatusEnum
from infra.database.repositories.lead_view_repository import LeadViewRepository


def invited_leads():
    return LeadViewRepository().get_all(status=None)

def accepted_leads():
    return LeadViewRepository().get_all(status=LeadStatusEnum.ACCEPTED.value)