from .base import *
import os

USE_PROXY = os.environ.get('USE_PROXY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-jf=(1y2h9^t@0m79w)8yn1(j^k29$s+x$vxmpcp9au7=fyx(h0"

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ["*"]

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


try:
    from .local import *
except ImportError:
    pass

if USE_PROXY:
    from .storage import *

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000'
]

ALLOWED_HOSTS = ['my_IPV4', '[my_IPV6]', 'localhost']
