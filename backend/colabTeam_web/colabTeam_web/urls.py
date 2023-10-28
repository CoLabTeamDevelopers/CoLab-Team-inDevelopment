# colabTeam_web/urls.py

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("home_app.urls")),
    path("user/", include("registration_app.urls")),
    path("api/v1/", include("api.urls")),
]
