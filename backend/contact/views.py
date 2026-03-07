import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from email_notify import send_contact_notification, send_contact_confirmation

logger = logging.getLogger(__name__)


@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    if "application/json" in (request.content_type or ""):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        data = request.POST

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return JsonResponse(
            {"error": "Name, email and message are required"},
            status=400,
        )

    # Send to admin
    send_contact_notification(name, email, message)

    # Send confirmation to client
    send_contact_confirmation(name, email)

    return JsonResponse({"success": True})
