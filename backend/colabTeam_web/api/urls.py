from django.urls import include, path
from rest_framework.routers import SimpleRouter

from .views import PostViewSet

router = SimpleRouter()
router.register("posts/", PostViewSet, basename="post")

app_name = "api"

urlpatterns = [
    path("", include(router.urls)),
    path("user/", include("registration_app.api.urls")),
]
