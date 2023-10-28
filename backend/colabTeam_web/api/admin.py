from django.contrib import admin
from .models import Post, Group, Task, Membership

# Register your models here.
admin.site.register(Post)
admin.site.register(Group)
admin.site.register(Task)
admin.site.register(Membership)