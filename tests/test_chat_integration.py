from app.services.chat_service import ChatService
from app.services.product_service import ProductService
from app.models.chat import ChatRequest, Intent

def test_product_search_integration():
    product_service = ProductService()
    chat_service = ChatService(product_service=product_service)
    
    request = ChatRequest(message="Do you have wireless headphones?", session_id="test123")
    response = chat_service.process(request)
    
    assert response.intent == Intent.PRODUCT_SEARCH
    assert "found" in response.response.lower() or "wireless" in response.response.lower()
