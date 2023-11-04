from django import forms
from .models import Profile

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['fName', 'lName', 'profilePic', 'bioText']
        exclude = ['user', 'auth_token', 'is_verified', 'created_on']
        widgets = {
            'fName': forms.TextInput(attrs={'class': 'first-name'}),
            'lName': forms.TextInput(attrs={'class': 'last-name'}),
            'profilePic': forms.FileInput(attrs={'class': 'profile'}),
            'bioText': forms.Textarea(attrs={'class': 'bio'}),
        }

        labels = {
            'fName': 'First Name',
            'lName': 'Last Name',
            'profilePic': 'Profile Picture',
            'bioText': 'Bio Text',
        }
