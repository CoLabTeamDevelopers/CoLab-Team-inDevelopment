# colabTeam_web/urls.py

from django.contrib import admin
from django.urls import path, include

from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView

urlpatterns = [
    path('admin/', admin.site.urls),   # Admin url
    path('', include('home_app.urls')),   # home app url
    path('user/', include('registration_app.urls')),   # user Authentication app url
    
    path('reset-password', PasswordResetView.as_view(template_name='registration/password_reset/password_reset_form.html',html_email_template_name='registration/custom_password_reset_email.html'), name='password_reset'), 
    path('reset-password/done', PasswordResetDoneView.as_view(template_name='registration/password_reset/password_reset_done.html'), name='password_reset_done'), 
    path('reset-password/confirm/<uidb64>[0-9A-Za-z]+)-<token>/', PasswordResetConfirmView.as_view(template_name='registration/password_reset/password_reset_confirm.html'), name='password_reset_confirm'), 
    path('reset-password/complete/',PasswordResetCompleteView.as_view(template_name='registration/password_reset/password_reset_complete.html'),name='password_reset_complete'),
]
