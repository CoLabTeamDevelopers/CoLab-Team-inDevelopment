from django.urls import path
from knox import views as knox_views

from . import views

urlpatterns = [
    path("login/", views.LoginView.as_view()),
    path("logout/", knox_views.LogoutView.as_view()),
    path("register/", views.register_user),
    path("verify/<str:token>", views.verify_user),
    path("forgot-password/", views.forgot_password),
    path("reset-password/<int:user_id>-<str:token>", views.reset_password),
]
