from fastapi import Header, HTTPException

DEMO_TOKEN = "demo-token"


def require_bearer(authorization: str | None = Header(default=None)) -> None:
    if not authorization:
        raise HTTPException(status_code=401, detail="Unauthorized")
    if authorization.strip() != f"Bearer {DEMO_TOKEN}":
        raise HTTPException(status_code=401, detail="Unauthorized")

