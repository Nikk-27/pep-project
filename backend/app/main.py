from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import users

from app.database import Base, engine

# Create tables
Base.metadata.create_all(bind=engine)

# Init app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(users.router)
