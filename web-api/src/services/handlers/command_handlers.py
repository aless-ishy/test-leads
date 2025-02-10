from __future__ import annotations

from domain.commands import lead_commands
from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork


def accept_lead(command: lead_commands.DeclineLeadCommand, unit_of_work: AbstractUnitOfWork):
    lead = unit_of_work.leads.get_by_id(command.id)
    generated_events = lead.accept()
    unit_of_work.events.extend(generated_events)


def decline_lead(command: lead_commands.AcceptLeadCommand, unit_of_work: AbstractUnitOfWork):
    lead = unit_of_work.leads.get_by_id(command.id)
    generated_events = lead.decline()
    unit_of_work.events.extend(generated_events)

COMMAND_HANDLERS = {
    lead_commands.AcceptLeadCommand: accept_lead,
    lead_commands.DeclineLeadCommand: decline_lead,
}