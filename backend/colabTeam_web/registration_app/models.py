from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    """
    Define a user Profile model that extends the User model using a OneToOneField.
    This model stores additional information related to a user's profile.
    """

    # One-to-one relationship with the User model
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # A field to store an authentication token
    auth_token = models.CharField(max_length=100)
    # A boolean field to track user verification status
    is_verified = models.BooleanField(default=False)
    # A field to store the creation timestamp
    created_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        """A human-readable representation of the Profile instance.

        Returns:
            username (str): the username of the associated User
        """
        return self.user.username
