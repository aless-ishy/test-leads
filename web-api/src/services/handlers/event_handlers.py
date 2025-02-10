from __future__ import annotations

from domain.events import lead_events
from domain.models.lead import LeadStatusEnum
from infra.email.email import send_email
from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork


def publish_decline_lead(event: lead_events.DeclinedLeadEvent, unit_of_work: AbstractUnitOfWork):
    unit_of_work.leads.save(event.id, status=LeadStatusEnum.DECLINED.value)


def publish_accept_lead(event: lead_events.AcceptedLeadEvent, unit_of_work: AbstractUnitOfWork):
    unit_of_work.leads.save(event.id, price=event.price, status=LeadStatusEnum.ACCEPTED.value)


def accepted_lead_send_email(event: lead_events.AcceptedLeadSendEmailEvent, _: AbstractUnitOfWork):
    send_email("vendas@test.com", f"Lead {event.id} accepted")


def update_lead_status_to_declined_in_read_model(event: lead_events.DeclinedLeadEvent, unit_of_work: AbstractUnitOfWork):
    unit_of_work.leads_view.save(event.id, status=LeadStatusEnum.DECLINED.value)


def update_lead_status_to_accepted_in_read_model(event: lead_events.AcceptedLeadEvent, unit_of_work: AbstractUnitOfWork):
    unit_of_work.leads_view.save(event.id, price=event.price, status=LeadStatusEnum.ACCEPTED.value)


EVENT_HANDLERS = {
    lead_events.AcceptedLeadEvent: [
        publish_accept_lead,
        update_lead_status_to_accepted_in_read_model,
        accepted_lead_send_email,
    ],
    lead_events.DeclinedLeadEvent: [
        publish_decline_lead,
        update_lead_status_to_declined_in_read_model
    ],
}
