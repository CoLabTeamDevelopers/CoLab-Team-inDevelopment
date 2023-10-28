from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    CATEGORIES = [
        ('website', 'WEBSITE'),
        ('game', 'GAME'),
        ('software', 'SOFTWARE'),
        ('mobile app', 'MOBILE APP'),
        ('other', 'OTHER'),
        #We can add more choices later
    ]
    title = models.CharField(max_length=30)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    requirements = models.TextField(blank= True, null= True)
    benefits = models.TextField(blank=True, null= True)
    max_contributors = models.IntegerField(blank=True, null= True)
    category = models.CharField(max_length=15, blank=True, null=True, choices=CATEGORIES)
    is_closed = models.BooleanField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} created by: user-{self.user}"


class Group(models.Model):
    post = models.OneToOneField(
        Post,
        on_delete=models.CASCADE,
        primary_key=True
    )
    name = models.CharField(max_length=30)
    members = models.ManyToManyField(User, through="Membership")

    def __str__(self):
        return self.name
    
class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    role = models.CharField(max_length=30, blank=True, null=True)
    date_joined = models.DateField()

class Task(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name