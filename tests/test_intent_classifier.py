from app.services.intent_classifier import IntentClassifier
from app.models.chat import Intent

def test_classify_order_status():
    classifier = IntentClassifier()
    intent = classifier.classify("Where's my order?")
    assert intent == Intent.ORDER_STATUS

def test_classify_product_search():
    classifier = IntentClassifier()
    intent = classifier.classify("Do you have blue shirts?")
    assert intent == Intent.PRODUCT_SEARCH

def test_classify_cart():
    classifier = IntentClassifier()
    intent = classifier.classify("Add to cart")
    assert intent == Intent.CART

def test_classify_faq():
    classifier = IntentClassifier()
    intent = classifier.classify("What are your store hours?")
    assert intent == Intent.FAQ

def test_classify_checkout():
    classifier = IntentClassifier()
    intent = classifier.classify("I want to buy")
    assert intent == Intent.CHECKOUT
    intent = classifier.classify("I want to purchase")
    assert intent == Intent.CHECKOUT

def test_classify_return():
    classifier = IntentClassifier()
    intent = classifier.classify("I want to return my order")
    assert intent == Intent.RETURN
    intent = classifier.classify("Can I get a refund?")
    assert intent == Intent.RETURN

def test_classify_recommendation():
    classifier = IntentClassifier()
    intent = classifier.classify("What do you recommend?")
    assert intent == Intent.RECOMMENDATION
    intent = classifier.classify("What's the best product?")
    assert intent == Intent.RECOMMENDATION

def test_classify_unknown():
    classifier = IntentClassifier()
    intent = classifier.classify("Hello there!")
    assert intent == Intent.UNKNOWN
