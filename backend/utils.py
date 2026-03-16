import json
from pathlib import Path
from typing import List
from models import Publication, NewsItem, ContactForm

DATA_DIR = Path(__file__).parent / "data"

def load_publications() -> List[Publication]:
    """Load publications from JSON file"""
    try:
        with open(DATA_DIR / "publications.json", "r") as f:
            data = json.load(f)
            return [Publication(**pub) for pub in data]
    except FileNotFoundError:
        return []

def load_news() -> List[NewsItem]:
    """Load news items from JSON file"""
    try:
        with open(DATA_DIR / "news.json", "r") as f:
            data = json.load(f)
            return [NewsItem(**news) for news in data]
    except FileNotFoundError:
        return []

def save_contact_message(contact: ContactForm):
    """Save contact form submission"""
    contact_data = contact.dict()
    # Log to console (in production, save to database)
    print(f"Contact Form Submission: {contact_data}")
    return contact_data
