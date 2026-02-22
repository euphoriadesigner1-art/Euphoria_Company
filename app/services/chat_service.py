from app.models.chat import ChatRequest, ChatResponse, Intent
from app.services.intent_classifier import IntentClassifier
from app.services.rules_handler import RulesHandler
from app.services.product_service import ProductService

class ChatService:
    def __init__(self, product_service: ProductService = None):
        self.classifier = IntentClassifier()
        self.rules_handler = RulesHandler()
        self.product_service = product_service or ProductService()
        self.llm_service = None

    def process(self, request: ChatRequest) -> ChatResponse:
        intent = self.classifier.classify(request.message)
        
        if intent == Intent.PRODUCT_SEARCH:
            stop_words = {"a", "an", "the", "do", "you", "have", "i", "want", "looking", "for", "search", "find", "me", "can", "get"}
            words = request.message.lower().split()
            query = "".join(c for c in " ".join(w for w in words if w not in stop_words) if c.isalnum() or c == " ")
            products = self.product_service.search(query)
            if products:
                product_list = "\n".join([f"- {p.name}: ${p.price}" for p in products[:3]])
                response = f"I found some products for you:\n{product_list}"
            else:
                response = "I couldn't find any products matching your search."
        elif intent in [Intent.UNKNOWN, Intent.RECOMMENDATION]:
            response = "I'd be happy to help you with that. Could you provide more details?"
        else:
            response = self.rules_handler.handle(intent, request.message)
        
        return ChatResponse(
            response=response,
            intent=intent,
            session_id=request.session_id
        )
