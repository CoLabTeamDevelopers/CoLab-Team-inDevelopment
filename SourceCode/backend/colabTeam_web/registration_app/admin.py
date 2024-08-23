from django.contrib import admin

from .models import AuthToken, Profile

admin.site.register(AuthToken)
admin.site.register(Profile)
