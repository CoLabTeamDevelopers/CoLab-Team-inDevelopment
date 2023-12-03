from rest_framework import serializers

from .models import Group, Membership, Post, Task


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "title",
            "description",
            "user",
            "requirements",
            "benefits",
            "max_contributors",
            "category",
            "is_closed",
            "created_at",
        ]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ["name", "post", "members"]


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = ["user", "group", "role", "date_joined"]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["name", "description", "created_by", "post", "created_at"]
