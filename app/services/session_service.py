import uuid
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class Session:
    session_id: str
    user_id: Optional[str] = None
    messages: list = field(default_factory=list)
    cart_items: list = field(default_factory=list)

class SessionService:
    def __init__(self):
        self.sessions: dict[str, Session] = {}

    def create_session(self, user_id: Optional[str] = None) -> Session:
        session_id = str(uuid.uuid4())
        session = Session(session_id=session_id, user_id=user_id)
        self.sessions[session_id] = session
        return session

    def get_session(self, session_id: str) -> Optional[Session]:
        return self.sessions.get(session_id)

    def add_message(self, session_id: str, role: str, content: str):
        session = self.sessions.get(session_id)
        if session:
            session.messages.append({"role": role, "content": content})
