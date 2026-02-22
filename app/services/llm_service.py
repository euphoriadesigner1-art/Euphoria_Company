import os
import logging
from openai import AsyncOpenAI
from typing import Optional

logger = logging.getLogger(__name__)

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
        # Note: session_id and context are reserved for future use (e.g., conversation history, user context)
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
            logger.error(f"LLM service error: {e}")
            return "I apologize, but I'm having trouble responding right now. Please try again."
