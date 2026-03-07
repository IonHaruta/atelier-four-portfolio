"""
Email notification module for contact form submissions.
Uses django.core.mail.send_mail() with SMTP from settings.
"""
import logging
from django.conf import settings
from django.core.mail import send_mail

logger = logging.getLogger(__name__)


def send_contact_notification(name: str, email: str, message: str) -> bool:
    """
    Send contact form submission to admin.

    Returns True if sent successfully, False otherwise.
    Does not raise - logs errors and returns False.
    """
    if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
        logger.warning(
            "Email not configured: EMAIL_HOST_USER and EMAIL_HOST_PASSWORD must be set. "
            "Skipping contact notification."
        )
        return False

    admin_email = getattr(settings, "ADMIN_ORDER_EMAIL", "info@atelierfourdesign.com")

    subject = f"Contact form: {name} ({email})"
    body = f"""New contact form submission from Atelier Four website:

Name: {name}
Email: {email}

Message:
{message}
"""

    try:
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[admin_email],
            fail_silently=False,
        )
        logger.info("Contact notification sent successfully to %s", admin_email)
        return True
    except Exception as e:
        logger.exception("Failed to send contact notification: %s", e)
        return False


def send_contact_confirmation(name: str, email: str) -> bool:
    """
    Send confirmation email to the client who submitted the form.

    Returns True if sent successfully, False otherwise.
    Does not raise - logs errors and returns False.
    """
    if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
        logger.warning(
            "Email not configured: EMAIL_HOST_USER and EMAIL_HOST_PASSWORD must be set. "
            "Skipping contact confirmation."
        )
        return False

    subject = "Thank you for contacting Atelier Four"
    body = f"""Dear {name},

Thank you for reaching out. We have received your message and will get back to you shortly.

Best regards,
Atelier Four
"""

    try:
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )
        logger.info("Contact confirmation sent to %s", email)
        return True
    except Exception as e:
        logger.exception("Failed to send contact confirmation: %s", e)
        return False
