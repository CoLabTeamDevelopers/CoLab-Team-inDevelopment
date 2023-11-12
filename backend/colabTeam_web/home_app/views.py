# home_app/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from api.models import Post
from home_app.forms import PostForm


# Render Home page
def HomeView(request):
    return render(request, "index.html")

@login_required
def add_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            new_post = form.save(commit=False)
            new_post.user = request.user  # Assign the current user as the author
            new_post.save()
            return redirect('home_app:posts')  # Redirect to the post detail page
    else:
        form = PostForm()
    
    return render(request, 'posts/add_posts.html', {'form': form})

def posts(request):
    posts = Post.objects.all()
    return render(request, 'posts/post_list.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'posts/post_detail.html', {'post': post})