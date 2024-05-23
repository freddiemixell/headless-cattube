import os
import requests
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.conf import settings


@login_required
def deploy_page_view(request):
    if not request.user.is_superuser:
        raise PermissionDenied

    env = os.getenv("DJANGO_SETTINGS_MODULE", "cattube_headless.settings.dev")

    if request.method == "POST":
        if env != "cattube_headless.settings.dev":
            run_build()
        else:
            print("Dev environment: No deploy happening.")

        return render(request, "deploy_page.html", {"status": "deployed"})

    return render(request, "deploy_page.html", {"status": None})


def run_build():
    url = "https://api.netlify.com/build_hooks/664e3a2acf07a4128b06894f"
    response = requests.post(url)
    if response.status_code == 200:
        print("Build triggered successfully.")
    else:
        print("Failed to trigger build. Status code:", response.status_code)
