from .base import *

DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-jf=(1y2h9^t@0m79w)8yn1(j^k29$s+x$vxmpcp9au7=fyx(h0"

try:
    from .local import *
except ImportError:
    pass

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000'
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000'
]
