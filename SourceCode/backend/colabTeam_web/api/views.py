from rest_framework.viewsets import ReadOnlyModelViewSet

from .serializers import PostSerializer
from .models import Post


class PostViewSet(ReadOnlyModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
