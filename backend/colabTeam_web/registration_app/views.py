# registration_app/views.py

from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import *
import uuid
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.

# View for user login
def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the user exists
        user_obj = User.objects.filter(username=username).first()
        if user_obj is None:
            messages.success(request, 'User not found.')
            return redirect('registration_app:login')

        # Check if the user's email is verified
        profile_obj = Profile.objects.filter(user=user_obj).first()
        if not profile_obj.is_verified:
            messages.success(request, 'Your email is not verified. Check your mail')
            return redirect('registration_app:login')

        user = authenticate(username=username, password=password)

        # Check if the entered password is correct
        if user is None:
            messages.success(request, 'Password is wrong')
            return redirect('registration_app:login')

        login(request, user)
        return redirect('home_app:home')

    return render(request, 'registration/login.html')

# View for user registration
def registerUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        Cpassword = request.POST.get('Cpassword')

        try:
            if User.objects.filter(username=username).first():
                messages.success(request, 'Username already exists.')
                return redirect('registration_app:register')

            if User.objects.filter(email=email).first():
                messages.success(request, 'Email already exists.')
                return redirect('registration_app:register')

            if password != Cpassword:
                messages.success(request, 'Password does not match.')
                return redirect('registration_app:register')

            # Create a new user and send a verification email
            user_obj = User.objects.create(username=username, email=email)
            user_obj.set_password(password)
            user_obj.save()
            auth_token = str(uuid.uuid4())

            profile_obj = Profile.objects.create(user=user_obj, auth_token=auth_token)
            profile_obj.save()

            send_mail_verification(email, auth_token)

            return redirect('registration_app:token')

        except Exception as e:
            print(e)

    return render(request, 'registration/register.html')

# View for user logout
def logoutUser(request):
    logout(request)
    return redirect('registration_app:login')

# View for a success page
def success(request):
    return render(request, 'registration/success.html')

# View for displaying a token
def token_send(request):
    return render(request, 'registration/token.html')

# Function to send a verification email
def send_mail_verification(email, token):
    subject = 'Your Account needs to be verified'
    message = f"""To verify your email, please click on the following link or copy and paste it into your web browser:

http://127.0.0.1:8000/user/verify/{token}

If clicking the link doesn't work, please ensure you paste the entire URL into your browser's address bar."""

    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)

# View for verifying a user's email
def verify_user(request, auth_token):
    try:
        profile_obj = Profile.objects.filter(auth_token=auth_token).first()

        if profile_obj:
            if profile_obj.is_verified:
                messages.success(request, 'Email is already Verified.')
                return redirect('registration_app:login')
            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request, 'Email Verified.')

            return redirect('registration_app:login')

        else:
            return redirect('error')

    except Exception as e:
        print(e)

# View for displaying an error page
def error_page(request):
    return render(request, 'registration/error.html')

