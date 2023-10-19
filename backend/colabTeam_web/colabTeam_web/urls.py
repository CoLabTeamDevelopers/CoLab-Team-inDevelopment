# colabTeam_web/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),   # Admin url
    path('', include('home_app.urls')),   # home app url
    path('user/', include('registration_app.urls')),   # user Authentication app url
]
