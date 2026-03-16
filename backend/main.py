from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import publications, news, contact

app = FastAPI(
    title="DIP Lab API",
    description="API for Digital Image Processing Laboratory",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(publications.router, prefix="/api")
app.include_router(news.router, prefix="/api")
app.include_router(contact.router, prefix="/api")

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "DIP Lab API",
        "version": "1.0.0",
        "endpoints": {
            "publications": "/api/publications",
            "news": "/api/news",
            "contact": "/api/contact"
        }
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
