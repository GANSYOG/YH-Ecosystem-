from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import home_automation, gpt_agents, coding_studio

app = FastAPI(
    title="YH Ecosystem API",
    description="Backend API for home automation, custom GPT agents, and Vibe coding studio",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(home_automation.router, prefix="/api/home", tags=["Home Automation"])
app.include_router(gpt_agents.router, prefix="/api/agents", tags=["GPT Agents"])
app.include_router(coding_studio.router, prefix="/api/studio", tags=["Coding Studio"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to YH Ecosystem API",
        "version": "1.0.0",
        "status": "active"
    }