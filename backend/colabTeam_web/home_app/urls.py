# home_app/urls.py

from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'home_app'

urlpatterns = [
    path ('', views.HomeView, name='home'),   # Home page
]