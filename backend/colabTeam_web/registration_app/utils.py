from typing import Any
from django.http import HttpRequest

from .models import AuthToken, User


class TypedHttpRequest(HttpRequest):
    auth: AuthToken
    data: dict[str, Any]
    user: User
