# FastAPI — CRUD REST + OpenAPI

Este projeto é a versão executável (local) da demo que aparece no portfólio em `public/demos/apis-fastapi/`.

## Rodar local

Requisitos: Python 3.11+

```bash
python -m venv .venv
./.venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Login (demo): `POST /auth/login` retorna `demo-token`.

Para chamar endpoints protegidos:

`Authorization: Bearer demo-token`

## Gerar OpenAPI estático (para GitHub Pages)

```bash
python scripts/export_openapi.py
```

