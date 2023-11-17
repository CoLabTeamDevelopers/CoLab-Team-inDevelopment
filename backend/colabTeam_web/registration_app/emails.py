from django.http import HttpRequest
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags

from .models import Profile, User
from .tokens import password_reset_token_generator


def send_email(
    request: HttpRequest,
    user: User,
    email_subject: str,
    template_name: str,
    template_context: dict[str, str] = {},
    url: str | None = None,
    absolute_url: str | None = None,
):
    template_context["url"] = url or request.build_absolute_uri(absolute_url)

    html_message = render_to_string(template_name, template_context)
    plain_message = strip_tags(html_message)

    email = EmailMultiAlternatives(email_subject, plain_message, to=[user.email])
    email.attach_alternative(html_message, "text/html")
    email.send()


def send_verification_email(request: HttpRequest, user: User, profile: Profile):
    absolute_url = reverse("api:verify", args=(profile.auth_token,))

    send_email(
        request=request,
        user=user,
        email_subject="Your account needs to be verified.",
        template_name="email/verify_email.html",
        absolute_url=absolute_url,
    )


def send_password_reset_email(request: HttpRequest, user: User):
    token = password_reset_token_generator.make_token(user)
    url = f"http://localhost:5173/reset-password?uid={user.pk}&token={token}"

    send_email(
        request=request,
        user=user,
        template_name="email/password_reset.html",
        email_subject="Reset Password",
        url=url,
    )
