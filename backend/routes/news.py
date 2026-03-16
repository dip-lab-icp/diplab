from fastapi import APIRouter
from utils import load_news

router = APIRouter()

@router.get("/news")
async def get_news():
    """Get all news items"""
    news = load_news()
    return news
