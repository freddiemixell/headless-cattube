from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel, TabbedInterface, ObjectList
from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField
from django import forms


class YoutubeDirectoryPage(Page):
    parent_page_types = ["wagtailcore.Page"]
    sub_page_types = ["YoutubeVideoPage"]

    enable_js_api = models.BooleanField(
        blank=True,
        default=False,
        help_text="Enables the player to be controlled via iFrame Player API calls.",
    )
    origin = models.URLField(
        blank=True,
        help_text="The domain of the website that will be allowed to embed the player. Required by enable_js_api.",
    )
    disable_kb = models.BooleanField(
        blank=True,
        default=False,
        help_text="Causes the player to not respond to keyboard controls.",
    )

    content_panels = Page.content_panels + [
        FieldPanel("enable_js_api"),
        FieldPanel("origin"),
        FieldPanel("disable_kb"),
    ]

    api_fields = [
        APIField("enable_js_api"),
        APIField("origin"),
        APIField("disable_kb"),
    ]


class YoutubeVideoPage(Page):

    parent_page_types = ["YoutubeDirectoryPage"]
    sub_page_types = []

    video_id = models.TextField(blank=True, help_text="The ID of the video to play.")
    width = models.IntegerField(
        blank=True, default=560, help_text="The width of the player in pixels."
    )
    height = models.IntegerField(
        blank=True, default=315, help_text="The height of the player in pixels."
    )
    auto_play = models.BooleanField(
        blank=True,
        default=False,
        help_text="Automatically start the video when the page loads.",
    )
    controls = models.BooleanField(
        blank=True, default=True, help_text="Show video controls."
    )
    loop = models.BooleanField(
        blank=True,
        default=False,
        help_text="Causes the player to play the initial video again and again.",
    )

    description = models.TextField(blank=True, help_text="Description of the video.")
    thumbnail = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    content_panels = Page.content_panels + [
        FieldPanel("description"),
        FieldPanel("thumbnail"),
    ]

    video_controls_panels = [
        FieldPanel("video_id", widget=forms.TextInput()),
        FieldPanel("width"),
        FieldPanel("height"),
        FieldPanel("auto_play"),
        FieldPanel("controls"),
        FieldPanel("loop"),
    ]

    api_fields = [
        APIField("description"),
        APIField("thumbnail"),
        APIField(
            "thumbnail_full",
            serializer=ImageRenditionField("fill-480x360", source="thumbnail"),
        ),
        APIField("video_id"),
        APIField("width"),
        APIField("height"),
        APIField("auto_play"),
        APIField("controls"),
        APIField("loop"),
    ]

    edit_handler = TabbedInterface(
        [
            ObjectList(content_panels, heading="Content"),
            ObjectList(video_controls_panels, heading="Video controls"),
            ObjectList(Page.promote_panels, heading="Promote"),
            ObjectList(
                Page.settings_panels, heading="Settings"
            ),  # The default settings are now displayed in the sidebar but need to be in the `TabbedInterface`.
        ]
    )
