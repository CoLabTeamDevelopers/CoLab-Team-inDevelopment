# Setting Up Poetry:-
For those who do not know how to use poetry or what poetry is,

Poetry is a tool that helps Python developers manage the libraries (dependencies) their projects need. It makes it easier to:

   - Keep a list of the libraries your project uses.
   
   - Create a controlled environment for your project so different projects don't interfere with each other.
   
   - Ensure that everyone working on your project uses the same versions of libraries.
   
   - Build and share your Python code with others.

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

### Install other dependencies:

Use Poetry to add and manage other dependencies for your Django project. For example, if you need a database package like psycopg2 for PostgreSQL, use:


```
poetry add psycopg2
```

Remember to run poetry install after adding new dependencies to update the virtual environment.