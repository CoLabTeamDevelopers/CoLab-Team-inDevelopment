from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpRequest
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags

from .models import Profile, User


def send_email(
    request: HttpRequest,
    absolute_url: str,
    template_name: str,
    subject: str,
    user: User,
    template_context: dict[str, str] = {},
):
    domain = get_current_site(request).domain
    protocol = "https" if request.is_secure() else "http"
    template_context["url"] = f"{protocol}://{domain}{absolute_url}"

    html_message = render_to_string(template_name, template_context)
    plain_message = strip_tags(html_message)

    email = EmailMultiAlternatives(subject, plain_message, to=[user.email])
    email.attach_alternative(html_message, "text/html")
    email.send()


def send_verification_email(request: HttpRequest, user: User, profile: Profile):
    absolute_url = reverse("api:verify", args=(profile.auth_token,))

    send_email(
        request,
        absolute_url,
        "email/verify_email.html",
        "Your account needs to be verified.",
        user,
    )


def send_password_reset_email(request: HttpRequest, user: User):
    token = PasswordResetTokenGenerator().make_token(user)
    absolute_url = reverse("api:reset-password", args=(user.pk, token))

    send_email(
        request,
        absolute_url,
        "email/password_reset.html",
        "Reset Password",
        user,
    )
