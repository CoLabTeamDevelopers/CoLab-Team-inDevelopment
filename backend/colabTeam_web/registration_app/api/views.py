import uuid

from django.conf import settings
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import get_object_or_404
from knox.views import LoginView as KnoxLoginView
from rest_framework import decorators, permissions, status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response

from ..models import Profile
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

        user.email_user(
            subject="Your Account needs to be verified",
            message=f"""To verify your email, please click on the following link or copy and paste it into your web browser:

http://127.0.0.1:8000/api/v1/user/verify/{profile.auth_token}

If clicking the link doesn't work, please ensure you paste the entire URL into your browser's address bar.""",
            from_email=settings.EMAIL_HOST_USER,  # type: ignore
        )

        result = {
            "user": serializers.UserSerializer(instance=user).data,
            "profile": serializers.ProfileSerializer(instance=profile).data,
        }

        return Response(result)


@decorators.api_view(["PUT"])
@decorators.permission_classes([permissions.AllowAny])
def verify_user(request, token: str):
    profile = get_object_or_404(Profile, auth_token=token)

    if profile.is_verified:
        return Response("Email is already verified", status.HTTP_403_FORBIDDEN)

    profile.is_verified = True
    profile.save()

    return Response(None)
