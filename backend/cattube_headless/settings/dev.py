from .base import *
import os

USE_PROXY = os.environ.get('USE_PROXY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-jf=(1y2h9^t@0m79w)8yn1(j^k29$s+x$vxmpcp9au7=fyx(h0"


EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


try:
    from .local import *
except ImportError:
    pass

if USE_PROXY:
    from .secrets import get_secret
    GS_FILE_OVERWRITE = False
    from .production import STORAGES, DB_PASSWORD
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": "postgres",
            "USER": "postgres",
            "PASSWORD": DB_PASSWORD,
            "HOST": "localhost", # staging db is proxied through localhost
            "PORT": "5432",
        }
    }

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000'
]

ALLOWED_HOSTS = ['my_IPV4', '[my_IPV6]', 'localhost']
