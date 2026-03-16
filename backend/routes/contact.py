from fastapi import APIRouter
from models import ContactForm
from utils import save_contact_message

router = APIRouter()

@router.post("/contact")
async def contact(form: ContactForm):
    """Handle contact form submission"""
    result = save_contact_message(form)
    return {"status": "success", "message": "Your message has been received"}
