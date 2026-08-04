from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import HealthView, TaskViewSet

router = DefaultRouter()
router.register("tasks", TaskViewSet, basename="tasks")

urlpatterns = [
    path("health/", HealthView.as_view()),
    path("", include(router.urls)),
]

