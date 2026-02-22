# E-commerce AI Chatbot Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an API-first e-commerce AI chatbot with hybrid rules-based + LLM capabilities for product discovery, order support, customer service, and cart/checkout assistance.

**Architecture:** API-first design with FastAPI, hybrid AI engine (rules + LLM), session-based conversation context, and extensible integration layer.

**Tech Stack:** FastAPI (Python), PostgreSQL, Redis, OpenAI GPT or Anthropic Claude, pgvector for embeddings.

---

## Phase 1: Project Setup

### Task 1: Initialize Project Structure

**Files:**
- Create: `ecommerce-chatbot/pyproject.toml`
- Create: `ecommerce-chatbot/README.md`

**Step 1: Create project directory and files**

```bash
mkdir -p ecommerce-chatbot
cd ecommerce-chatbot
cat > pyproject.toml << 'EOF'
[project]
name = "ecommerce-chatbot"
version = "0.1.0"
description = "API-first e-commerce AI chatbot"
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.109.0",
    "uvicorn>=0.27.0",
    "pydantic>=2.5.0",
    "python-dotenv>=1.0.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0.0",
    "pytest-asyncio>=0.23.0",
    "httpx>=0.26.0",
]
EOF
```

**Step 2: Commit**

```bash
git init
git add pyproject.toml README.md
git commit -m "chore: initialize project structure"
```

---

### Task 2: Create Basic FastAPI App

**Files:**
- Create: `ecommerce-chatbot/app/main.py`
- Create: `ecommerce-chatbot/app/__init__.py`
- Test: `ecommerce-chatbot/tests/test_main.py`

**Step 1: Write the failing test**

```python
# tests/test_main.py
from httpx import AsyncClient
from app.main import app

async def test_root_endpoint():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}
```

**Step 2: Run test to verify it fails**

```bash
cd ecommerce-chatbot
pytest tests/test_main.py::test_root_endpoint -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}
```

```python
# app/__init__.py
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_main.py::test_root_endpoint -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/ tests/
git commit -m "feat: add FastAPI app with health endpoint"
```

---

## Phase 2: Core Domain Models

### Task 3: Define Chat Models

**Files:**
- Create: `ecommerce-chatbot/app/models/chat.py`
- Create: `ecommerce-chatbot/app/models/__init__.py`
- Test: `ecommerce-chatbot/tests/test_chat_models.py`

**Step 1: Write the failing test**

```python
# tests/test_chat_models.py
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
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_chat_models.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/models/chat.py
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
```

```python
# app/models/__init__.py
from app.models.chat import Message, ChatRequest, ChatResponse, Intent
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_chat_models.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/models/ tests/
git commit -m "feat: add chat domain models"
```

---

### Task 4: Define Product Models

**Files:**
- Create: `ecommerce-chatbot/app/models/product.py`
- Modify: `ecommerce-chatbot/app/models/__init__.py`
- Test: `ecommerce-chatbot/tests/test_product_models.py`

**Step 1: Write the failing test**

```python
# tests/test_product_models.py
from app.models.product import Product, ProductCategory

def test_product_model():
    product = Product(
        id="prod_123",
        name="Wireless Headphones",
        description="High-quality wireless headphones",
        price=99.99,
        category=ProductCategory.ELECTRONICS,
        in_stock=True
    )
    assert product.id == "prod_123"
    assert product.price == 99.99

def test_product_category():
    assert ProductCategory.ELECTRONICS.value == "electronics"
    assert ProductCategory.CLOTHING.value == "clothing"
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_product_models.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/models/product.py
from enum import Enum
from pydantic import BaseModel

class ProductCategory(str, Enum):
    ELECTRONICS = "electronics"
    CLOTHING = "clothing"
    HOME = "home"
    SPORTS = "sports"
    BOOKS = "books"
    OTHER = "other"

class Product(BaseModel):
    id: str
    name: str
    description: str
    price: float
    category: ProductCategory
    in_stock: bool
    image_url: str | None = None
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_product_models.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/models/ tests/
git commit -m "feat: add product domain models"
```

---

## Phase 3: Rules Engine

### Task 5: Intent Classifier

**Files:**
- Create: `ecommerce-chatbot/app/services/intent_classifier.py`
- Test: `ecommerce-chatbot/tests/test_intent_classifier.py`

**Step 1: Write the failing test**

```python
# tests/test_intent_classifier.py
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
    intent = classifier.classify("What's your return policy?")
    assert intent == Intent.FAQ
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_intent_classifier.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/services/intent_classifier.py
from app.models.chat import Intent

class IntentClassifier:
    def __init__(self):
        self.rules = {
            "order_status": ["order", "shipped", "delivery", "track"],
            "product_search": ["buy", "product", "have", "looking for", "search"],
            "cart": ["cart", "add to", "remove"],
            "checkout": ["checkout", "buy now", "purchase", "pay"],
            "return": ["return", "refund", "exchange"],
            "faq": ["policy", "hours", "location", "contact", "help"],
            "recommendation": ["recommend", "suggest", "what should", "best"],
        }

    def classify(self, message: str) -> Intent:
        message_lower = message.lower()
        
        for intent, keywords in self.rules.items():
            if any(kw in message_lower for kw in keywords):
                return Intent(intent)
        
        return Intent.UNKNOWN
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_intent_classifier.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/services/ tests/
git commit -m "feat: add intent classifier with rules engine"
```

---

### Task 6: Rules-Based Response Handler

**Files:**
- Create: `ecommerce-chatbot/app/services/rules_handler.py`
- Test: `ecommerce-chatbot/tests/test_rules_handler.py`

**Step 1: Write the failing test**

```python
# tests/test_rules_handler.py
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
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_rules_handler.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/services/rules_handler.py
from app.models.chat import Intent

class RulesHandler:
    def __init__(self):
        self.responses = {
            Intent.ORDER_STATUS: "I can help you with your order. Could you please provide your order number?",
            Intent.RETURN: "Our return policy allows returns within 30 days of purchase. Would you like to start a return?",
            Intent.CHECKOUT: "I can help you complete your purchase. Would you like to proceed to checkout?",
            Intent.FAQ: "I'd be happy to help. Could you be more specific about what you'd like to know?",
            Intent.CART: "I can add items to your cart. Which product would you like to add?",
            Intent.UNKNOWN: "I'm not sure I understand. Could you rephrase that? I'm here to help with orders, products, and more.",
        }

    def handle(self, intent: Intent, message: str) -> str:
        return self.responses.get(intent, self.responses[Intent.UNKNOWN])
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_rules_handler.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/services/ tests/
git commit -m "feat: add rules-based response handler"
```

---

## Phase 4: LLM Integration

### Task 7: LLM Service

**Files:**
- Create: `ecommerce-chatbot/app/services/llm_service.py`
- Create: `ecommerce-chatbot/.env.example`
- Test: `ecommerce-chatbot/tests/test_llm_service.py`

**Step 1: Write the failing test**

```python
# tests/test_llm_service.py
import pytest
from unittest.mock import AsyncMock, patch
from app.services.llm_service import LLMService

@pytest.mark.asyncio
async def test_generate_response():
    service = LLMService()
    with patch.object(service, 'client', create=True):
        response = await service.generate("Hello", "test_session")
        assert isinstance(response, str)
        assert len(response) > 0
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_llm_service.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/services/llm_service.py
import os
from openai import AsyncOpenAI
from typing import Optional

class LLMService:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.model = os.getenv("LLM_MODEL", "gpt-4")
        self.system_prompt = """You are a helpful e-commerce shopping assistant.
        You help users with:
        - Finding products
        - Order status and tracking
        - Cart and checkout
        - Returns and refunds
        - General questions about the store
        
        Be concise, friendly, and helpful. If you need more information, ask the user."""

    async def generate(self, message: str, session_id: str, context: Optional[dict] = None) -> str:
        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": self.system_prompt},
                    {"role": "user", "content": message}
                ],
                max_tokens=500,
            )
            return response.choices[0].message.content
        except Exception as e:
            return "I apologize, but I'm having trouble responding right now. Please try again."
```

```bash
# .env.example
OPENAI_API_KEY=your_openai_api_key_here
LLM_MODEL=gpt-4
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_llm_service.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/services/ .env.example
git commit -m "feat: add LLM service integration"
```

---

## Phase 5: Chat API Endpoint

### Task 8: Chat Endpoint

**Files:**
- Modify: `ecommerce-chatbot/app/main.py`
- Create: `ecommerce-chatbot/app/services/chat_service.py`
- Test: `ecommerce-chatbot/tests/test_chat_endpoint.py`

**Step 1: Write the failing test**

```python
# tests/test_chat_endpoint.py
from httpx import AsyncClient
from app.main import app
from app.models.chat import Intent

async def test_chat_endpoint():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.post("/chat", json={
            "message": "Where's my order?",
            "session_id": "test123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert "intent" in data
        assert data["intent"] == Intent.ORDER_STATUS.value
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_chat_endpoint.py -v
# Expected: FAIL - endpoint not defined
```

**Step 3: Write minimal implementation**

```python
# app/services/chat_service.py
from app.models.chat import ChatRequest, ChatResponse, Intent
from app.services.intent_classifier import IntentClassifier
from app.services.rules_handler import RulesHandler

class ChatService:
    def __init__(self):
        self.classifier = IntentClassifier()
        self.rules_handler = RulesHandler()
        self.llm_service = None  # Will be injected

    def process(self, request: ChatRequest) -> ChatResponse:
        intent = self.classifier.classify(request.message)
        
        if intent in [Intent.UNKNOWN, Intent.RECOMMENDATION]:
            response = "I'd be happy to help you with that. Could you provide more details?"
        else:
            response = self.rules_handler.handle(intent, request.message)
        
        return ChatResponse(
            response=response,
            intent=intent,
            session_id=request.session_id
        )
```

```python
# app/main.py
from fastapi import FastAPI
from app.main import chat_service, ChatRequest, ChatResponse

app = FastAPI()
chat_service = ChatService()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    return chat_service.process(request)
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_chat_endpoint.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/ tests/
git commit -m "feat: add chat API endpoint"
```

---

## Phase 6: Session Management

### Task 9: Session Service

**Files:**
- Create: `ecommerce-chatbot/app/services/session_service.py`
- Test: `ecommerce-chatbot/tests/test_session_service.py`

**Step 1: Write the failing test**

```python
# tests/test_session_service.py
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
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_session_service.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/services/session_service.py
import uuid
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class Session:
    session_id: str
    user_id: Optional[str] = None
    messages:_factory=list)
    list = field(default cart_items: list = field(default_factory=list)

class SessionService:
    def __init__(self):
        self.sessions: dict[str, Session] = {}

    def create_session(self, user_id: Optional[str] = None) -> Session:
        session_id = str(uuid.uuid4())
        session = Session(session_id=session_id, user_id=user_id)
        self.sessions[session_id] = session
        return session

    def get_session(self, session_id: str) -> Optional[Session]:
        return self.sessions.get(session_id)

    def add_message(self, session_id: str, role: str, content: str):
        session = self.sessions.get(session_id)
        if session:
            session.messages.append({"role": role, "content": content})
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_session_service.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/services/ tests/
git commit -m "feat: add session management service"
```

---

## Phase 7: Product Catalog (Mock)

### Task 10: Product Service

**Files:**
- Create: `ecommerce-chatbot/app/services/product_service.py`
- Test: `ecommerce-chatbot/tests/test_product_service.py`

**Step 1: Write the failing test**

```python
# tests/test_product_service.py
from app.services.product_service import ProductService
from app.models.product import ProductCategory

def test_search_products():
    service = ProductService()
    products = service.search("headphones")
    assert len(products) > 0
    assert "headphone" in products[0].name.lower()

def test_get_product():
    service = ProductService()
    product = service.get_product("prod_1")
    assert product is not None
    assert product.id == "prod_1"

def test_get_by_category():
    service = ProductService()
    products = service.get_by_category(ProductCategory.ELECTRONICS)
    assert len(products) > 0
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_product_service.py -v
# Expected: FAIL - module not found
```

**Step 3: Write minimal implementation**

```python
# app/services/product_service.py
from app.models.product import Product, ProductCategory

class ProductService:
    def __init__(self):
        self.products = [
            Product(id="prod_1", name="Wireless Headphones", description="High-quality wireless headphones with noise cancellation", price=99.99, category=ProductCategory.ELECTRONICS, in_stock=True),
            Product(id="prod_2", name="Running Shoes", description="Comfortable running shoes for daily jog", price=79.99, category=ProductCategory.SPORTS, in_stock=True),
            Product(id="prod_3", name="Cotton T-Shirt", description="Soft cotton t-shirt in multiple colors", price=24.99, category=ProductCategory.CLOTHING, in_stock=True),
            Product(id="prod_4", name="Coffee Maker", description="Automatic coffee maker with timer", price=49.99, category=ProductCategory.HOME, in_stock=True),
            Product(id="prod_5", name="Bluetooth Speaker", description="Portable bluetooth speaker with bass", price=59.99, category=ProductCategory.ELECTRONICS, in_stock=True),
        ]

    def search(self, query: str) -> list[Product]:
        query_lower = query.lower()
        return [p for p in self.products if query_lower in p.name.lower() or query_lower in p.description.lower()]

    def get_product(self, product_id: str) -> Product | None:
        for p in self.products:
            if p.id == product_id:
                return p
        return None

    def get_by_category(self, category: ProductCategory) -> list[Product]:
        return [p for p in self.products if p.category == category]
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_product_service.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/services/ tests/
git commit -m "feat: add product service with mock catalog"
```

---

## Phase 8: Integration

### Task 11: Full Chat Flow with Products

**Files:**
- Modify: `ecommerce-chatbot/app/services/chat_service.py`
- Test: `ecommerce-chatbot/tests/test_chat_integration.py`

**Step 1: Write the failing test**

```python
# tests/test_chat_integration.py
from app.services.chat_service import ChatService
from app.services.product_service import ProductService
from app.models.chat import ChatRequest, Intent

def test_product_search_integration():
    product_service = ProductService()
    chat_service = ChatService(product_service=product_service)
    
    request = ChatRequest(message="Do you have headphones?", session_id="test123")
    response = chat_service.process(request)
    
    assert response.intent == Intent.PRODUCT_SEARCH
    assert "headphone" in response.response.lower() or "yes" in response.response.lower()
```

**Step 2: Run test to verify it fails**

```bash
pytest tests/test_chat_integration.py -v
# Expected: FAIL - product_service not passed
```

**Step 3: Write minimal implementation**

```python
# app/services/chat_service.py (updated)
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
            products = self.product_service.search(request.message)
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
```

**Step 4: Run test to verify it passes**

```bash
pytest tests/test_chat_integration.py -v
# Expected: PASS
```

**Step 5: Commit**

```bash
git add app/ tests/
git commit -m "feat: integrate product search with chat service"
```

---

## Phase 9: Documentation

### Task 12: API Documentation

**Files:**
- Modify: `ecommerce-chatbot/README.md`

**Step 1: Update README**

```markdown
# E-commerce AI Chatbot

API-first e-commerce chatbot with hybrid rules-based + LLM capabilities.

## Quick Start

```bash
# Install dependencies
pip install -e ".[dev]"

# Run server
uvicorn app.main:app --reload

# Run tests
pytest
```

## API Endpoints

### GET /health
Health check endpoint.

### POST /chat
Send a chat message.

Request:
```json
{
  "message": "Do you have wireless headphones?",
  "session_id": "abc123"
}
```

Response:
```json
{
  "response": "I found some products for you:\n- Wireless Headphones: $99.99",
  "intent": "product_search",
  "session_id": "abc123"
}
```
```

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add API documentation"
```

---

## Summary

**Completed Tasks:** 12

**Total Commits:** 12

This implementation plan covers:
1. Project setup with FastAPI
2. Domain models (chat, product)
3. Rules-based intent classification
4. Rules-based response handling
5. LLM service integration
6. Chat API endpoint
7. Session management
8. Product catalog (mock)
9. Full integration
10. Documentation

The bot can now handle product searches, basic intents via rules, and is ready for LLM integration.
