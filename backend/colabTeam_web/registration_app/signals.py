from .models import *
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        created = Profile.objects.get_or_create(user=instance)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, **kwargs):
    instance.profile.save()