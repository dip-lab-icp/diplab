from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Publication(BaseModel):
    title: str
    authors: str
    venue: str
    year: int
    description: Optional[str] = None
    pdfUrl: Optional[str] = None

class NewsItem(BaseModel):
    title: str
    description: str
    date: datetime
    category: Optional[str] = None

class ContactForm(BaseModel):
    name: str
    email: str
    message: str
