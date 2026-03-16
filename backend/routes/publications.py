from fastapi import APIRouter
from utils import load_publications

router = APIRouter()

@router.get("/publications")
async def get_publications():
    """Get all publications"""
    publications = load_publications()
    return publications
