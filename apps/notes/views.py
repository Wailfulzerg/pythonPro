from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Note, Project
from .serializers import NoteSerializer, ProjectSerializer
from rest_framework.pagination import LimitOffsetPagination
from .filters import ProjectFilter, NoteFilter
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class NoteLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 10

class ProjectLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 20


class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = NoteFilter

    def destroy(self, request, pk=None):
        queryset = Note.objects.all()
        note = get_object_or_404(queryset, pk=pk)
        note.done = True
        note.save()
        serializer = NoteSerializer(note)
        return Response(serializer.data)


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter



