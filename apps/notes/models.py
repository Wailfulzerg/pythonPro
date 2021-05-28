from django.db import models
from users.models import User


class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    members = models.ManyToManyField(User, related_name='projects')


class Note(models.Model):
    done = models.BooleanField(default=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='notes', null=True)
    text = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='notes')






