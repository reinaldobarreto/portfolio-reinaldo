import json
from pathlib import Path

from app.main import app


def main() -> None:
    root = Path(__file__).resolve().parents[2]
    out = root / "public" / "demos" / "apis-fastapi" / "openapi.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(app.openapi(), indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()

