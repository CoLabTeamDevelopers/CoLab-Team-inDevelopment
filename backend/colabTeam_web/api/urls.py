from django.urls import include, path
from rest_framework.routers import SimpleRouter

from .views import PostViewSet

router = SimpleRouter()
router.register("", PostViewSet, basename="post")

app_name = "api"

urlpatterns = [
    path("posts/", include(router.urls)),
    path("user/", include("registration_app.api.urls")),
]
