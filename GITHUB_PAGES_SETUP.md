# Configurare GitHub Pages

## Pages

1. Mergi la: **https://github.com/IonHaruta/atelier-four-portfolio/settings/pages**
2. La **Build and deployment** → **Source** alege **GitHub Actions**
3. **Default branch** = **main**

## Contact form (Django backend)

Formularul de contact trimite la API-ul Django. Pentru production:

1. Deployează backend-ul Django (Railway, Render, etc.) — vezi `backend/README.md`
2. În GitHub: **Settings** → **Secrets and variables** → **Actions**
3. Adaugă secret: `VITE_API_URL` = URL-ul API-ului (ex: `https://atelier-four-api.onrender.com`)

Fără acest secret, formularul va încerca să trimită la `http://localhost:8000` (nu va funcționa pe site-ul live).
