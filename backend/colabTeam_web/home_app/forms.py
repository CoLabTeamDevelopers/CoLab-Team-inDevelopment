from django import forms
from api.models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'description', 'requirements', 'benefits', 'max_contributors', 'category', 'is_closed']
    

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].widget = forms.Select(choices=Post.CATEGORIES)
