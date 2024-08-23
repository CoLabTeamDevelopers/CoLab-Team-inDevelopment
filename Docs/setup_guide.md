# setup_guide.md

## Complete Guid -> CoLab Team/README.md


## Basic Commands:

	Add Django as a Dependency ( run in django folder ):
		>>> poetry add django [ to add python & django libs, alternative of PIP ]
	
	Install Dependencies:
		>>> poetry install

	Run the Development Server:
		>>> poetry run python manage.py runserver

	project migrations:
		>>> poetry run python manage.py migrate
	
	create app inside of the project:
		>>> poetry run python manage.py startapp <app name>

	Create Superuser:
		>>> poetry run python manage.py createsuperuser
