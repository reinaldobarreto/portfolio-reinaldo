import json
from pathlib import Path
import sys


DEMO_ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = Path(__file__).resolve().parents[3]

if str(DEMO_ROOT) not in sys.path:
    sys.path.insert(0, str(DEMO_ROOT))

from app.main import app


def main() -> None:
    out = PROJECT_ROOT / "public" / "demos" / "apis-fastapi" / "openapi.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(app.openapi(), indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()

