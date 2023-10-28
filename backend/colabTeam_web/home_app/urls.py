# home_app/urls.py

from django.urls import path
from . import views

app_name = "home_app"

urlpatterns = [
    path("", views.HomeView, name="home"),  # Home page
]
