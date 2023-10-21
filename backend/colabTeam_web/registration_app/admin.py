# registration_app/admin.py

from django.contrib import admin
from .models import *

# Register Profile model
admin.site.register(Profile)