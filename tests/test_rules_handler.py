from app.services.rules_handler import RulesHandler
from app.models.chat import Intent

def test_handle_order_status():
    handler = RulesHandler()
    response = handler.handle(Intent.ORDER_STATUS, "Where's my order #123?")
    assert "order" in response.lower() or "need" in response.lower()

def test_handle_faq_return_policy():
    handler = RulesHandler()
    response = handler.handle(Intent.FAQ, "return policy")
    assert "return" in response.lower()

def test_handle_unknown():
    handler = RulesHandler()
    response = handler.handle(Intent.UNKNOWN, "random text")
    assert "help" in response.lower() or "understand" in response.lower()

def test_handle_return():
    handler = RulesHandler()
    response = handler.handle(Intent.RETURN, "I want to return my order")
    assert "return" in response.lower()

def test_handle_checkout():
    handler = RulesHandler()
    response = handler.handle(Intent.CHECKOUT, "I want to checkout")
    assert "checkout" in response.lower() or "purchase" in response.lower()

def test_handle_cart():
    handler = RulesHandler()
    response = handler.handle(Intent.CART, "Add to cart")
    assert "cart" in response.lower() or "product" in response.lower()

def test_handle_product_search():
    handler = RulesHandler()
    response = handler.handle(Intent.PRODUCT_SEARCH, "Find me a laptop")
    assert "product" in response.lower() or "looking" in response.lower()

def test_handle_recommendation():
    handler = RulesHandler()
    response = handler.handle(Intent.RECOMMENDATION, "What do you recommend?")
    assert "recommend" in response.lower() or "preferences" in response.lower()
