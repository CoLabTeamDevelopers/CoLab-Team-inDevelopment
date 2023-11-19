from django.contrib.auth.models import User
from django.db import models

from .querysets import AuthTokenQueryset


class AuthToken(models.Model):
    objects = AuthTokenQueryset.as_manager()

    key = models.CharField(max_length=8, db_index=True)
    hash = models.CharField(max_length=128, primary_key=True)
    user = models.ForeignKey(
        User,
        related_name="auth_token",
        on_delete=models.CASCADE,
        verbose_name="User",
    )
    ip_address = models.CharField(max_length=100, default="0.0.0.0")
    created_at = models.DateTimeField(auto_now_add=True)
    expired_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.ip_address} - {self.user.username}"


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        default="media/users/default.jpg",
        upload_to="media/users",
        null=True,
        blank=True,
    )
    bio = models.TextField(max_length=500, null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        """A human-readable representation of the Profile instance.

        Returns:
            username (str): the username of the associated User
        """
        return self.user.get_username()
