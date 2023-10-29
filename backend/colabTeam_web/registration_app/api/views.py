from django.contrib.auth import login

from rest_framework import permissions, status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from knox.views import LoginView as KnoxLoginView
from ..models import Profile
from . import serializers


class LoginView(KnoxLoginView):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LoginRequestSerializer

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
