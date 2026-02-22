from fastapi import FastAPI
from app.services.chat_service import ChatService
from app.models.chat import ChatRequest, ChatResponse

app = FastAPI()
chat_service = ChatService()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    return chat_service.process(request)
