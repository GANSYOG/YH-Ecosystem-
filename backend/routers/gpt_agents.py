from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class AgentPrompt(BaseModel):
    prompt: str
    context: dict = {}

@router.post("/chat")
async def chat_with_agent(prompt: AgentPrompt):
    """Interact with a custom GPT agent"""
    return {
        "response": "Agent response will be implemented here",
        "context": prompt.context
    }

@router.get("/agents")
async def list_agents():
    """List available custom GPT agents"""
    return {
        "agents": [
            {"id": "home-assistant", "name": "Home Assistant", "description": "AI for home automation"},
            {"id": "code-helper", "name": "Code Helper", "description": "Programming assistance"}
        ]
    }