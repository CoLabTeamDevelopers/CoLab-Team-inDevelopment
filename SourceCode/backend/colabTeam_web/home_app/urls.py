from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = "home_app"

urlpatterns = [
    path("", views.HomeView, name="home"),
    path("add_post", views.add_post, name="add_post"),
    path("posts", views.posts, name="posts"),
    path("post/<int:post_id>/", views.post_detail, name="post_detail"),
    path(
        "reset-password",
        auth_views.PasswordResetView.as_view(
            template_name="registration/password_reset/password_reset_form.html",
            html_email_template_name="registration/custom_password_reset_email.html",
        ),
        name="password_reset",
    ),
    path(
        "reset-password/done",
        auth_views.PasswordResetDoneView.as_view(
            template_name="registration/password_reset/password_reset_done.html"
        ),
        name="password_reset_done",
    ),
    path(
        "reset-password/confirm/<uidb64>[0-9A-Za-z]+)-<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="registration/password_reset/password_reset_confirm.html"
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset-password/complete/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="registration/password_reset/password_reset_complete.html"
        ),
        name="password_reset_complete",
    ),
]
