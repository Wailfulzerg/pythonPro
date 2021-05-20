from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import Note, Project
from .serializers import NoteSerializer, ProjectSerializer


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [AllowAny]


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]


