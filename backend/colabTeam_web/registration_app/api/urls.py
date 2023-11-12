from django.urls import path
from knox import views as knox_views

from . import views

urlpatterns = [
    path("login/", views.LoginView.as_view(), name="login"),
    path("logout/", knox_views.LogoutView.as_view(), name="logout"),
    path("register/", views.register_user, name="register"),
    path("verify/<str:token>/", views.verify_user, name="verify"),
    path("forgot-password/", views.forgot_password, name="forgot-password"),
    path("reset-password/", views.reset_password, name="reset-password"),
]
