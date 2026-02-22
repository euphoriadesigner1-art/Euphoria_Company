from app.models.chat import Intent

class RulesHandler:
    def __init__(self):
        self.responses = {
            Intent.ORDER_STATUS: "I can help you with your order. Could you please provide your order number?",
            Intent.RETURN: "Our return policy allows returns within 30 days of purchase. Would you like to start a return?",
            Intent.CHECKOUT: "I can help you complete your purchase. Would you like to proceed to checkout?",
            Intent.FAQ: "I'd be happy to help. Could you be more specific about what you'd like to know?",
            Intent.CART: "I can add items to your cart. Which product would you like to add?",
            Intent.PRODUCT_SEARCH: "I can help you find products. What are you looking for?",
            Intent.RECOMMENDATION: "I'd be happy to recommend products. What are your preferences or needs?",
            Intent.UNKNOWN: "I'm not sure I understand. Could you rephrase that? I'm here to help with orders, products, and more.",
        }

    def handle(self, intent: Intent, message: str) -> str:
        if intent == Intent.FAQ:
            message_lower = message.lower()
            if "return" in message_lower:
                return "Our return policy allows returns within 30 days of purchase. Would you like to start a return?"
            return self.responses[Intent.FAQ]
        return self.responses.get(intent, self.responses[Intent.UNKNOWN])
