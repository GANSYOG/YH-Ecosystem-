from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class Project(BaseModel):
    name: str
    description: str
    tech_stack: list[str]

@router.post("/projects")
async def create_project(project: Project):
    """Create a new coding project"""
    return {"status": "success", "project": project}

@router.get("/templates")
async def get_templates():
    """Get available project templates"""
    return {
        "templates": [
            {"id": "react-app", "name": "React Application", "description": "Modern React.js app"},
            {"id": "fastapi-backend", "name": "FastAPI Backend", "description": "Python FastAPI service"}
        ]
    }