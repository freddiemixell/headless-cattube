from .base import *
from .secrets import get_secret
from google.oauth2 import service_account
import os

DEBUG = False
PROJECT_ID = 'cattube-422413'
BUCKET_STATIC = 'cattube-static-prod'
BUCKET_MEDIA = 'cattube-assets-prod'
STATIC_URL = f"https://storage.cloud.google.com/{BUCKET_STATIC}/"
SECRET_KEY = get_secret("django_secret_key", PROJECT_ID)
DB_NAME = 'cattube-prod-db'
DB_PASSWORD = get_secret("db_password", PROJECT_ID)
GS_FILE_OVERWRITE = False

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://cattube-tv.netlify.app'
]

ALLOWED_HOSTS = ['cattube-422413.uc.r.appspot.com']

# Database Settings
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres",
        "USER": "postgres",
        "PASSWORD": DB_PASSWORD,
        "HOST": f"/cloudsql/{PROJECT_ID}:us-central1:{DB_NAME}",
        "PORT": "5432",
    }
}

credentials = service_account.Credentials.from_service_account_info(
    get_secret("account_info", PROJECT_ID, return_json=True)
)
STORAGES = {
    # This hooks up the cms so that any images UPLOADED through the cms are sent to the bucket listed below.
    # Don't worry about creating directories. Wagtail will create the original_images and images directory.
    # This also works to send the videos to this bucket as well in original_videos.
    'default': {
        'BACKEND': 'storages.backends.gcloud.GoogleCloudStorage',
        'OPTIONS': {
            'bucket_name': BUCKET_MEDIA,
            'project_id': PROJECT_ID,
            'credentials': credentials
        }
    },
    # This is how we add the static files from the cms to the cloud as well.
    # The css, js and images for Wagtail core to operate as a cms.
    # This is not client code only internal Wagtail code.
    # They're sent to this bucket by running manage.py collectstatic --noinput.
    'staticfiles': {
        'BACKEND': 'storages.backends.gcloud.GoogleCloudStorage',
        'OPTIONS': {
            'bucket_name': BUCKET_STATIC,
            'project_id': PROJECT_ID,
            'credentials': credentials
        }
    }
}