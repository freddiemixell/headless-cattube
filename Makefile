# Setup Dev Environment
# After creating env, to activate run:
# pyenv activate cattubeenv
dev-env:
	pyenv install 3.11.1 -s && pyenv local 3.11.1 && pyenv virtualenv 3.11.1 cattubeenv

# Clean Dev Environment
dev-clean:
	pyenv uninstall cattubeenv

# Update Dependencies
dev-update:
	pip install -r ./backend/requirements.txt && pip freeze > ./backend/requirements.txt

dev:
	python ./backend/manage.py runserver [::]:8000

migrations:
	python ./backend/manage.py makemigrations

migrate:
	python ./backend/manage.py migrate

# Create a superuser
admin:
	python ./backend/manage.py createsuperuser

# Shell into wagtail
shell:
	python ./backend/manage.py shell

proxy-db:
	./backend/cloud-sql-proxy cattube-422413:us-central1:cattube-prod-db

deploy-cms:
	DJANGO_SETTINGS_MODULE=cattube_headless.settings.production python ./backend/manage.py collectstatic --noinput && gcloud app deploy ./backend/app.yaml --project=cattube-422413

# Build cms assets for deploying cms itself.
static:
	python ./backend/manage.py collectstatic --noinput

