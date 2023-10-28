# home_app/views.py
from django.shortcuts import render


# Render Home page
def HomeView(request):
    return render(request, "index.html")
