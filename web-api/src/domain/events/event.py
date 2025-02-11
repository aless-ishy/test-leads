import abc


class Event:

    @abc.abstractmethod
    def to_json_byte(self, **extra_data):
        return b"{}"