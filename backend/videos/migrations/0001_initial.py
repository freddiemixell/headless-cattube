# Generated by Django 5.0.6 on 2024-05-10 18:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0093_uploadedfile'),
    ]

    operations = [
        migrations.CreateModel(
            name='YoutubeVideoPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('video_id', models.TextField(blank=True)),
                ('width', models.IntegerField(blank=True, default=560)),
                ('height', models.IntegerField(blank=True, default=315)),
                ('auto_play', models.BooleanField(blank=True, default=False)),
                ('controls', models.BooleanField(blank=True, default=True)),
                ('disable_kb', models.BooleanField(blank=True, default=False)),
                ('loop', models.BooleanField(blank=True, default=False)),
                ('enable_js_api', models.BooleanField(blank=True, default=False)),
                ('origin', models.URLField(blank=True, help_text='This parameter provides an extra security measure for the IFrame API and is only supported for IFrame embeds. If you are using the IFrame API, which means you are setting the enablejsapi parameter value to 1, you should always specify your domain as the origin parameter value.')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='YoutubeDirectoryPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('featured_videos', models.ManyToManyField(blank=True, to='videos.youtubevideopage')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]