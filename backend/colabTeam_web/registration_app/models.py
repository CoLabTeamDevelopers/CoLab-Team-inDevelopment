# registration_app/models.py
    
from django.db import models
from django.contrib.auth.models import User

# Define a user Profile model that extends the User model using a OneToOneField.
# This model stores additional information related to a user's profile.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # One-to-one relationship with the User model
    auth_token = models.CharField(max_length=100)  # A field to store an authentication token
    is_verified = models.BooleanField(default=False)  # A boolean field to track user verification status
    created_on = models.DateTimeField(auto_now=True)  # A field to store the creation timestamp

    # A human-readable representation of the Profile instance, which returns the username of the associated User.
    def __str__(self):
        return self.user.username