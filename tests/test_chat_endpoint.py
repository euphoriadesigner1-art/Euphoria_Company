from httpx import AsyncClient, ASGITransport
from app.main import app
from app.models.chat import Intent

async def test_chat_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
        response = await client.post("/chat", json={
            "message": "Where's my order?",
            "session_id": "test123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert "intent" in data
        assert data["intent"] == Intent.ORDER_STATUS.value
