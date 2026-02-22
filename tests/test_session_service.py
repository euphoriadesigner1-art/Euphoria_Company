from app.services.session_service import SessionService

def test_create_session():
    service = SessionService()
    session = service.create_session("user123")
    assert session.session_id is not None
    assert session.user_id == "user123"

def test_get_session():
    service = SessionService()
    session = service.create_session("user123")
    retrieved = service.get_session(session.session_id)
    assert retrieved is not None
    assert retrieved.user_id == "user123"
