from django import forms
from api.models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'description', 'requirements', 'benefits', 'max_contributors', 'category', 'is_closed']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Add the 'form-control' class to the widget of each field separately
        self.fields['title'].widget.attrs.update({'class': 'form-control'})
        self.fields['description'].widget.attrs.update({'class': 'form-control'})
        self.fields['requirements'].widget.attrs.update({'class': 'form-control'})
        self.fields['benefits'].widget.attrs.update({'class': 'form-control'})
        self.fields['max_contributors'].widget.attrs.update({'class': 'form-control'})
        self.fields['is_closed'].widget.attrs.update({'class': 'form-control form-check-input'})

        # Set the widget for the 'category' field
        self.fields['category'].widget = forms.Select(choices=Post.CATEGORIES)

