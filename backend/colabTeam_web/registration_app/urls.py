from django.urls import path

from . import views

# Define the namespace for the URL patterns for this app.
app_name = "registration_app"

# Define URL patterns for various views in the 'registration_app' app.
urlpatterns = [
    path("login", views.login_user, name="login"),  # URL for user login
    path("register", views.register_User, name="register"),  # URL for user registration
    path("logout", views.logoutUser, name="logout"),  # URL for user logout
    path(
        "token", views.token_send, name="token"
    ),  # URL for sending tokens (corrected typo)
    path("success", views.success, name="success"),  # URL for success page
    path(
        "verify/<auth_token>", views.verify_user, name="verify"  # type: ignore
    ),  # URL for verifying user
    path("error", views.error_page, name="error"),  # URL for error page
]
