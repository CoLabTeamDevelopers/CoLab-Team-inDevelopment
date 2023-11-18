from django.contrib.auth.models import User
from django.db import models
from rest_framework.authtoken.models import Token


class AuthToken(Token):
    ip_address = models.CharField(max_length=100, default="0.0.0.0")


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
