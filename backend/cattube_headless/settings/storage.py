# File Storage Settings

import os
from google.oauth2 import service_account

PROJECT_ID = 'cattube-422413'
BUCKET_STATIC = 'cattube-static-prod'
BUCKET_MEDIA = 'cattube-assets-prod'
STATIC_URL = f"https://storage.cloud.google.com/{BUCKET_STATIC}/"

GS_FILE_OVERWRITE = False

credentials = service_account.Credentials.from_service_account_file(
    os.path.join(os.path.dirname(__file__), './credentials.json')
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