import uuid

from django.contrib.auth import login, update_session_auth_hash
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.http import Http404
from django.shortcuts import get_object_or_404, redirect
from knox.views import LoginView as KnoxLoginView
from rest_framework import decorators, permissions, status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response

from ..emails import send_password_reset_email, send_verification_email
from ..models import Profile, User
from . import serializers


class LoginView(KnoxLoginView):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LoginRequestSerializer

    def get_post_response_data(self, request, token, instance):
        user = serializers.UserSerializer(
            instance=request.user,
            context=self.get_context(),
        )
        return {
            "user": user.data,
            "token": {
                "expiry_date": self.format_expiry_datetime(instance.expiry),
                "key": token,
            },
        }

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]  # type: ignore
        profile = Profile.objects.get(user=user)

        if not profile.is_verified:
            return Response(
                "Your email is not verified.", status=status.HTTP_403_FORBIDDEN
            )

        login(request, user)
        return super(LoginView, self).post(request, format=None)


@decorators.api_view(["POST"])
@decorators.permission_classes([permissions.AllowAny])
def register_user(request):
    serializer = serializers.RegisterRequestSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data: dict[str, str] = serializer.validated_data  # type: ignore

    try:
        if get_object_or_404(User, username=data["username"]):
            return Response(
                "User with this username already exists",
                status=status.HTTP_406_NOT_ACCEPTABLE,
            )
        if get_object_or_404(User, email=data["email"]):
            return Response(
                "User with this email already exists",
                status=status.HTTP_406_NOT_ACCEPTABLE,
            )
    except Http404:
        user = User.objects.create_user(
            username=data["username"],
            email=data["email"],
            password=data["password"],
        )

        profile = Profile.objects.create(user=user, auth_token=str(uuid.uuid4()))

        send_verification_email(request, user, profile)

        return Response(None)


@decorators.api_view(["GET"])
@decorators.permission_classes([permissions.AllowAny])
def verify_user(request, token: str):
    profile = get_object_or_404(Profile, auth_token=token)

    if profile.is_verified:
        return Response("Email is already verified", status.HTTP_403_FORBIDDEN)

    profile.is_verified = True
    profile.save()

    return redirect("http://localhost:5173/verify-email-success/")


@decorators.api_view(["POST"])
@decorators.permission_classes([permissions.AllowAny])
def forgot_password(request):
    serializer = serializers.ForgotPasswordSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    email = serializer.validated_data["email"]  # type: ignore
    user = get_object_or_404(User, email=email)

    send_password_reset_email(request, user)

    return Response(None)


@decorators.api_view(["POST"])
@decorators.permission_classes([permissions.AllowAny])
def reset_password(request, user_id: int, token: str):
    serializer = serializers.ResetPasswordSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    user = get_object_or_404(User, pk=user_id)
    token_exists = PasswordResetTokenGenerator().check_token(user, token)

    if not token_exists:
        return Response(data="Token has expired.", status=status.HTTP_410_GONE)

    new_password = serializer.validated_data["new_password"]  # type: ignore
    user.set_password(new_password)
    user.save()
    update_session_auth_hash(request, user)

    return Response(None)
