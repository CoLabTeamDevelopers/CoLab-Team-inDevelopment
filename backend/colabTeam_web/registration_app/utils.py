from django.conf import settings
from django.contrib.auth.models import User

from .models import Profile


def send_verification_email(user: User, profile: Profile):
    message = f"""To verify your email, please click on the following link or copy and paste it into your web browser:

http://127.0.0.1:8000/api/v1/user/verify/{profile.auth_token}

If clicking the link doesn't work, please ensure you paste the entire URL into your browser's address bar."""

    user.email_user(
        subject="Your Account needs to be verified",
        message=message,
        from_email=settings.EMAIL_HOST_USER,  # type: ignore
    )
