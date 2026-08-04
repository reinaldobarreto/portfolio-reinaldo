import json
import os
from pathlib import Path
import sys


DEMO_ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = Path(__file__).resolve().parents[3]

if str(DEMO_ROOT) not in sys.path:
    sys.path.insert(0, str(DEMO_ROOT))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

import django

django.setup()

from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory
from drf_spectacular.generators import SchemaGenerator


def main() -> None:
    request = RequestFactory().get("/api/schema/")
    request.user = AnonymousUser()
    request.auth = None
    schema = SchemaGenerator().get_schema(request=request, public=True)
    out = PROJECT_ROOT / "public" / "demos" / "apis-django" / "openapi.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(schema, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()

