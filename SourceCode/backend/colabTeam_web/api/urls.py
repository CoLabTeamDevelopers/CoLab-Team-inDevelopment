from django.urls import path, include


app_name = "api"

urlpatterns = [
    path("user/", include("registration_app.api.urls")),
]
