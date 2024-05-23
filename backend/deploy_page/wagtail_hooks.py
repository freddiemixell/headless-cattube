from wagtail import hooks
from wagtail.admin.menu import MenuItem
from django.urls import path, reverse
from .views import deploy_page_view


class SuperUserMenuItem(MenuItem):
    def is_shown(self, request):
        return request.user.is_superuser


@hooks.register("register_admin_urls")
def register_admin_urls():
    return [
        path("deploy-page/", deploy_page_view, name="deploy_page"),
    ]


@hooks.register("register_admin_menu_item")
def register_deploy_page_menu_item():
    return SuperUserMenuItem(
        "Deploy", reverse("deploy_page"), icon_name="code", order=10000
    )
