# Generated by Django 5.0.6 on 2024-05-24 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0005_remove_youtubevideopage_disable_kb_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='youtubevideopage',
            name='video_id',
            field=models.TextField(help_text='The ID of the video to play.'),
        ),
    ]