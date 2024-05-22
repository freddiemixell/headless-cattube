import os
import requests
import json
from google.cloud import secretmanager
from google.auth import impersonated_credentials
import google.auth.transport.requests

def get_secret(secret_name, project_id, return_json = False):
    try:
        client = secretmanager.SecretManagerServiceClient()
        secret_version_name = f"projects/{project_id}/secrets/{secret_name}/versions/latest"
        response = client.access_secret_version(request={"name": secret_version_name})
        payload = response.payload.data.decode('UTF-8')
        if return_json:
            return json.loads(payload)
        return f"{payload}"
    except requests.exceptions.RequestException as e:
        print(f"Error fetching secret: {e}")
        return None
    except json.JSONDecodeError:
        print("Error decoding JSON")
        return {}