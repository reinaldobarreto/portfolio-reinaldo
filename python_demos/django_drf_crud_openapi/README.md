# Django + DRF — CRUD REST + OpenAPI

Este projeto é a versão executável (local) da demo que aparece no portfólio em `public/demos/apis-django/`.

## Rodar local

Requisitos: Python 3.11+

```bash
python -m venv .venv
./.venv/Scripts/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

Endpoints:

- `GET /api/health/`
- CRUD: `/api/tasks/` e `/api/tasks/{id}/`
- Schema: `GET /api/schema/`

## Gerar OpenAPI estático (para GitHub Pages)

```bash
python scripts/export_openapi.py
```

