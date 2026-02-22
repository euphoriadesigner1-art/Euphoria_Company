# E-commerce AI Chatbot

API-first e-commerce chatbot with hybrid rules-based + LLM capabilities.

## Features

- Product discovery and search
- Order status and tracking
- Cart and checkout assistance
- Customer service FAQs
- Returns and refunds

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

**Response:**
```json
{
  "status": "ok"
}
```

### POST /chat

Send a chat message to the bot.

**Request:**
```json
{
  "message": "Do you have wireless headphones?",
  "session_id": "abc123"
}
```

**Response:**
```json
{
  "response": "I found some products for you:\n- Wireless Headphones: $99.99",
  "intent": "product_search",
  "session_id": "abc123"
}
```

## Supported Intents

- `order_status` - Track orders
- `product_search` - Find products
- `cart` - Cart operations
- `checkout` - Checkout assistance
- `return` - Returns and refunds
- `faq` - General questions
- `recommendation` - Product recommendations
