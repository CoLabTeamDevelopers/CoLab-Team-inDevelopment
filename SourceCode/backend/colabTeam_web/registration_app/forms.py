from django import forms
from .models import Profile


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ["profile_pic", "bio"]
        exclude = ["user", "is_verified", "created_on"]
        widgets = {
            "fName": forms.TextInput(attrs={"class": "first-name"}),
            "lName": forms.TextInput(attrs={"class": "last-name"}),
            "profile_pic": forms.FileInput(attrs={"class": "profile"}),
            "bio": forms.Textarea(attrs={"class": "bio"}),
        }

        labels = {
            "profile_pic": "Profile Picture",
            "bio": "Bio Text",
        }
