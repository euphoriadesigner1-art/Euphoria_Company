import pytest
from unittest.mock import AsyncMock, patch, MagicMock
from app.services.llm_service import LLMService

@pytest.mark.asyncio
async def test_generate_response():
    with patch.dict('os.environ', {'OPENAI_API_KEY': 'test-key', 'LLM_MODEL': 'gpt-4'}):
        with patch('app.services.llm_service.AsyncOpenAI') as mock_client:
            mock_client.return_value.chat.completions.create = AsyncMock(
                return_value=MagicMock(
                    choices=[MagicMock(message=MagicMock(content="Test response"))]
                )
            )
            service = LLMService()
            response = await service.generate("Hello", "test_session")
            assert isinstance(response, str)
            assert len(response) > 0
