from datetime import datetime, timezone

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from .models import Task
from .serializers import TaskSerializer


class HealthView(APIView):
    def get(self, request):
        return Response(
            {
                "status": "ok",
                "service": "apis-django-drf-demo",
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        )


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by("id")
    serializer_class = TaskSerializer

