from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE
    )  # One-to-one relationship with the User model
    fName = models.CharField(default="Rex", max_length=200, null=True)
    lName = models.CharField(default="alem", max_length=200, null=True)
    profilePic = models.ImageField(
        default="media/users/default.jpg",
        upload_to="media/users",
        null=True,
        blank=True,
    )
    bioText = models.TextField(max_length=500, default="Enter your bio", null=True)
    auth_token = models.CharField(
        max_length=100
    )  # A field to store an authentication token
    is_verified = models.BooleanField(
        default=False
    )  # A boolean field to track user verification status
    created_on = models.DateTimeField(
        auto_now=True
    )  # A field to store the creation timestamp

    def __str__(self):
        """A human-readable representation of the Profile instance.

        Returns:
            username (str): the username of the associated User
        """
        return self.user.get_username()
