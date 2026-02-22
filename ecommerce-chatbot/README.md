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
