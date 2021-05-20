from rest_framework import serializers
from .models import Note, Project
from users.models import User
from users.serializers import UserSerializer


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)
    notes = NoteSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'










