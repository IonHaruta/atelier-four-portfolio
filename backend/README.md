# Django Contact API

Backend pentru formularul de contact. Trimite emailuri prin SMTP.

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Variabile de mediu

Creează `backend/.env` (copiază din `.env.example`):

| Variabilă | Descriere | Default |
|-----------|-----------|---------|
| `EMAIL_HOST` | SMTP server | smtp.gmail.com |
| `EMAIL_PORT` | SMTP port | 587 |
| `EMAIL_HOST_USER` | Email pentru autentificare | - |
| `EMAIL_HOST_PASSWORD` | Parolă (Gmail: App Password) | - |
| `EMAIL_USE_TLS` | Folosește TLS | True |
| `DEFAULT_FROM_EMAIL` | De la cine apare emailul | Atelier Four \<noreply@...\> |
| `ADMIN_ORDER_EMAIL` | Unde se trimit mesajele (info@atelierfourdesign.com) | info@atelierfourdesign.com |
| `CORS_ALLOWED_ORIGINS` | Origini permise (frontend) | localhost, ionharuta.github.io |
| `ALLOWED_HOSTS` | Hosturi permise pentru API | localhost |

### Gmail

Pentru Gmail, folosește **App Password** (nu parola normală):

1. Google Account → Security → 2-Step Verification (trebuie activat)
2. App passwords → Generate → copiază parola
3. `EMAIL_HOST_PASSWORD=parola_generata`

## Rulare

```bash
cd backend
python manage.py runserver
```

API: `http://localhost:8000/api/contact/`

## Deploy

Deployează pe Railway, Render, PythonAnywhere etc. Setează variabilele de mediu în panoul de deploy.

Frontend: setează `VITE_API_URL` la URL-ul API-ului tău (ex: `https://atelier-four-api.onrender.com`).
