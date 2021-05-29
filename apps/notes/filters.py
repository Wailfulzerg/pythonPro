from django_filters import rest_framework as filters
from .models import Project, Note


class ProjectFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']


class NoteFilter(filters.FilterSet):
    project__name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Note
        fields = ['project']
