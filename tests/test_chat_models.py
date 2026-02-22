from app.models.chat import Message, ChatRequest, ChatResponse, Intent

def test_message_model():
    msg = Message(role="user", content="Hello")
    assert msg.role == "user"
    assert msg.content == "Hello"

def test_chat_request_model():
    req = ChatRequest(message="What's my order status?", session_id="abc123")
    assert req.message == "What's my order status?"
    assert req.session_id == "abc123"

def test_intent_enum():
    assert Intent.ORDER_STATUS.value == "order_status"
    assert Intent.PRODUCT_SEARCH.value == "product_search"
