from __future__ import annotations
from typing import List, Union

from .handlers.command_handlers import COMMAND_HANDLERS
from .handlers.event_handlers import EVENT_HANDLERS
from domain.repositories.abstract_unit_of_work import AbstractUnitOfWork
from domain.commands.command import Command
from domain.events.event import Event

Message = Union[Command, Event]


def handle(message: Message, unit_of_work: AbstractUnitOfWork):
    queue = [message]
    while queue:
        message = queue.pop(0)
        if isinstance(message, Event):
            handle_event(message, queue, unit_of_work)
        elif isinstance(message, Command):
            handle_command(message, queue, unit_of_work)
        else:
            raise Exception(f"{message} was not an Event or Command")


def handle_event(event: Event, queue: List[Message], unit_of_work: AbstractUnitOfWork):
    for handler in EVENT_HANDLERS[type(event)]:
        try:
            handler(event, unit_of_work)
            queue.extend(unit_of_work.collect_new_events())
        except Exception:
            continue


def handle_command(command: Command, queue: List[Message], unit_of_work: AbstractUnitOfWork):
    try:
        handler = COMMAND_HANDLERS[type(command)]
        handler(command, unit_of_work)
        generated_events = unit_of_work.collect_new_events()
        queue.extend(generated_events)
    except Exception:
        raise
