# Table of Contents

1. [User Registration and Verification Guide](#user-registration-and-verification-guide)

    - [Registration](#registration)
    - [Email Verification](#email-verification)
    - [Login](#login)

2. [Setting Up Project](#setting-up-project)

    - [Settings.py](#settingspy)
    - [Navigate to Project Directory](#navigate-to-project-directory)
    - [Install Dependencies](#install-dependencies)
    - [Database Setup](#database-setup)
    - [Accessing the Application](#accessing-the-application)

3. [Setting Up Poetry](#setting-up-poetry)
    - [Install Poetry](#install-poetry)
    - [Create a New Django Project](#create-a-new-django-project)
    - [Initialize a Poetry Project](#initialize-a-poetry-project)
    - [Add Django as a Dependency](#add-django-as-a-dependency)
    - [Activate the Virtual Environment](#activate-the-virtual-environment)
    - [Run Django Commands](#run-django-commands)

## User Registration and Verification Guide

This guide provides step-by-step instructions for registering as a user and verifying your account.

### 1. Registration:

    - Click the "Register" button on the navigation bar, which will take you to the registration page.

    - On the registration page, provide the following information:
        - Username
        - Email
        - Password
        - Confirm Password

    - After entering your details, click the "Register" button.

### 2. Email Verification:

    - An email with an authentication token will be sent to the email address you provided during registration.

    - Check your email inbox, including the spam folder, for the verification email.

    - Click on the verification link within the email to confirm your account.

### 3. Login:

    - Now that your account is verified, you can log in:

    - On the login page, provide your:
        - Username
        - Password

    - Click the "Login" button to access your account.

You're now successfully registered, verified, and logged in.

## Setting Up Project:-

### Settings.py:

Go to email setup section at the end of settings.py.

```
# Email Settings

# Set your less secure app password by following this link
# https://support.google.com/mail/answer/185833?hl=en

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = "xyz@gmail.com"  # Your email address
EMAIL_HOST_PASSWORD = "aaaa bbbb cccc dddd"  # Your less secure app password
```

### Setup .env File

Create `.env` file and copy / paste `.env.example` file's content.

```
# shellcheck disable=all

DEBUG='True'
SECRET_KEY='django-insecure-bw!@+w%mnt$*muft50=)kuhhdy#f1_6ni5@oma@+*kw-++ujty'
EMAIL_HOST_USER="Your email"
EMAIL_HOST_PASSWORD="Your app password"

```

### Navigate to Project Directory:

```
cd colabTeam_web
```

### install Dependencies:

```
poetry install
```

This command will read the `pyproject.toml` and `poetry.lock` files to install the exact dependencies required for the project.

### Database Setup:

```
poetry run python manage.py migrate
poetry run python manage.py runserver
```

or

```
poetry shell
python manage.py migrate
python manage.py runserver
```

### Accessing the Application:

The user can access the application in their web browseron local server.

## Setting Up Poetry:-

For those who do not know how to use poetry or what poetry is,

Poetry is a tool that helps Python developers manage the libraries (dependencies) their projects need. It makes it easier to:

-   Keep a list of the libraries your project uses.

-   Create a controlled environment for your project so different projects don't interfere with each other.

-   Ensure that everyone working on your project uses the same versions of libraries.

-   Build and share your Python code with others.

It's like a librarian for your Python project, making sure you have the right books (libraries) in a neat and organized library (virtual environment) so your project runs smoothly and can be easily shared with others.

### Install Poetry:

First, make sure you have Poetry installed on your system. You can install it using pip:

```
pip install poetry
```

### Create a new Django project:

Create a new Django project or navigate to an existing one:

```

django-admin startproject myproject
cd myproject
```

### Initialize a Poetry project:

Inside your Django project directory, initialize a Poetry project. This will create a pyproject.toml file:

```
poetry init
```

Follow the prompts to provide information about your project.

### Add Django as a dependency:

Add Django to your Poetry project as a dependency:

```
poetry add django
```

This will download and install the latest version of Django for your project.

### Activate the virtual environment:

Poetry automatically creates a virtual environment for your project. Activate it using:

```
poetry shell
```

### Run Django commands:

Now, you can run Django management commands within the activated virtual environment:

```
python manage.py runserver
```

This will start the development server.

