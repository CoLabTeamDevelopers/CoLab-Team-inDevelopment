from django.db.models import QuerySet
from django.utils import timezone

from . import crypto


class AuthTokenQueryset(QuerySet):
    def create(self, **kwargs):
        expired_at = kwargs.get("expired_at")
        token = crypto.create_token()

        if not expired_at:
            expired_at = timezone.now() + timezone.timedelta(days=30)

        return super().create(
            key=token[:8],
            hash=crypto.hash_token(token),
            expired_at=expired_at,
            **kwargs,
        )
