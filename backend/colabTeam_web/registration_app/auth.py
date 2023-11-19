import binascii
from hmac import compare_digest

from django.utils import timezone
from rest_framework.authentication import BaseAuthentication, get_authorization_header
from rest_framework.exceptions import AuthenticationFailed

from .crypto import hash_token
from .models import AuthToken


class TokenAuthentication(BaseAuthentication):
    """A custom authentication scheme that uses `AuthToken` model for authenticating users.

    On successful authorization:
    - `request.auth` will be an instance of `AuthToken` model.
    - `request.user` will be an instance of `User` model.
    """

    def authenticate_header(self, request):
        return "Token"

    def get_token(self, request):
        header = get_authorization_header(request).split()
        prefix = self.authenticate_header(request).encode()

        if not header or header[0] != prefix.lower():
            return None
        if len(header) == 1:
            raise AuthenticationFailed("Invalid token header. Token is missing.")
        if len(header) > 2:
            raise AuthenticationFailed("Invalid token header. Token is invalid.")

        return header[1].decode()

    def expire_token(self, token: AuthToken):
        if token.expired_at and token.expired_at < timezone.now():
            token.delete()
            return True
        return False

    def validate_token(self, token: AuthToken):
        auth_tokens = AuthToken.objects.filter(user=token.user)

        for auth_token in auth_tokens:
            if auth_token.hash != token.hash:
                self.expire_token(auth_token)

        return self.expire_token(token)

    def authenticate(self, request):
        if token := self.get_token(request):
            auth_tokens = AuthToken.objects.filter(key=token[:8])

            for auth_token in auth_tokens:
                if self.validate_token(auth_token):
                    continue

                try:
                    hash = hash_token(token)
                except (TypeError, binascii.Error):
                    raise AuthenticationFailed("Invalid token")

                if compare_digest(hash, auth_token.hash):
                    user = auth_token.user
                    if not user.profile.is_verified:  # type: ignore
                        raise AuthenticationFailed("User is not verified.")

                    return user, auth_token
