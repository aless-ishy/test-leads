from dataclasses import dataclass

from domain.commands.command import Command


@dataclass
class AcceptLeadCommand(Command):
    id: int


@dataclass
class DeclineLeadCommand(Command):
    id: int
