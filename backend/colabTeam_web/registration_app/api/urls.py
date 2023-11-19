from django.urls import path

from . import views

urlpatterns = [
    path("login/", views.LoginView.as_view(), name="login"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    path("register/", views.RegistrationView.as_view(), name="register"),
    path(
        "resend-verification-email/",
        views.ResendVerificationEmailView.as_view(),
        name="resend-verification-email",
    ),
    path("verify/<int:uid>-<str:token>/", views.verify_user, name="verify"),
    path(
        "forgot-password/", views.ForgotPasswordView.as_view(), name="forgot-password"
    ),
    path("reset-password/", views.ResetPasswordView.as_view(), name="reset-password"),
]
