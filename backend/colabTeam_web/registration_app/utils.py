from typing import Any
from django.http import HttpRequest

from .models import User


class TypedHttpRequest(HttpRequest):
    user: User
    data: dict[str, Any]
