from rest_framework import routers
from django.urls import path, include
from .views import ProjectViewSet, NoteViewSet

router = routers.SimpleRouter()

router.register('project', ProjectViewSet)
router.register('note', NoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

