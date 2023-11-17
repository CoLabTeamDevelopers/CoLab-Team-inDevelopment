from six import text_type
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from .models import Profile

password_reset_token_generator = PasswordResetTokenGenerator()


class EmailVerificationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp) -> str:
        profile = Profile.objects.get(user=user)
        return (
            text_type(user.pk) + text_type(timestamp) + text_type(profile.is_verified)
        )


email_verification_token_generator = EmailVerificationTokenGenerator()
