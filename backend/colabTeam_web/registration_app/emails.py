from django.contrib.auth.models import User
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from .models import Profile


def send_verification_email(user: User, profile: Profile):
    message = f"""To verify your email, please click on the following link or copy and paste it into your web browser:

http://127.0.0.1:8000/api/v1/user/verify/{profile.auth_token}

If clicking the link doesn't work, please ensure you paste the entire URL into your browser's address bar."""

    user.email_user(subject="Your Account needs to be verified", message=message)


def send_password_reset_email(user: User):
    token = PasswordResetTokenGenerator().make_token(user)

    message = f"""To reset your password, please click the link below or copy and paste it into your web browser:

http://127.0.0.1:8000/api/v1/user/reset-password/{user.pk}-{token}

If clicking the link doesn't work, please ensure you paste the entire URL into your browser's address bar."""

    user.email_user(subject="Password reset", message=message)
