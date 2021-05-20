from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include(('users.urls', 'users'))),
    path('api/notes/', include(('notes.urls', 'notes'))),
]
