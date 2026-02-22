from enum import Enum
from pydantic import BaseModel

class Intent(str, Enum):
    ORDER_STATUS = "order_status"
    PRODUCT_SEARCH = "product_search"
    CART = "cart"
    CHECKOUT = "checkout"
    RETURN = "return"
    FAQ = "faq"
    RECOMMENDATION = "recommendation"
    UNKNOWN = "unknown"

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    session_id: str
    user_id: str | None = None

class ChatResponse(BaseModel):
    response: str
    intent: Intent
    session_id: str
