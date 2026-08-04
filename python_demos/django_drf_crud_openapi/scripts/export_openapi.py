import json
import os
from pathlib import Path

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

import django

django.setup()

from django.test import RequestFactory
from drf_spectacular.generators import SchemaGenerator


def main() -> None:
    schema = SchemaGenerator().get_schema(request=RequestFactory().get("/api/schema/"), public=True)
    root = Path(__file__).resolve().parents[2]
    out = root / "public" / "demos" / "apis-django" / "openapi.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(schema, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()

