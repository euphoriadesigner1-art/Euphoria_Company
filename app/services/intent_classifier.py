from app.models.chat import Intent

class IntentClassifier:
    def __init__(self):
        self.rules = [
            ("checkout", ["checkout", "buy now", "purchase", "pay", "buy"]),
            ("return", ["return", "refund", "exchange"]),
            ("recommendation", ["recommend", "suggest", "what should", "best"]),
            ("order_status", ["order", "shipped", "delivery", "track"]),
            ("cart", ["cart", "add to", "remove"]),
            ("product_search", ["product", "have", "looking for", "search"]),
            ("faq", ["policy", "hours", "location", "contact", "help"]),
        ]

    def classify(self, message: str) -> Intent:
        message_lower = message.lower()
        
        for intent, keywords in self.rules:
            if any(kw in message_lower for kw in keywords):
                return Intent(intent)
        
        return Intent.UNKNOWN
