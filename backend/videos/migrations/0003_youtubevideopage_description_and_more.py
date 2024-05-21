# Generated by Django 5.0.6 on 2024-05-10 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0002_remove_youtubedirectorypage_featured_videos'),
    ]

    operations = [
        migrations.AddField(
            model_name='youtubevideopage',
            name='description',
            field=models.TextField(blank=True, help_text='Description of the video.'),
        ),
        migrations.AddField(
            model_name='youtubevideopage',
            name='thumbnail',
            field=models.ImageField(blank=True, help_text='Thumbnail image for the video.', upload_to='thumbnails/'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='auto_play',
            field=models.BooleanField(blank=True, default=False, help_text='Automatically start the video when the page loads.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='controls',
            field=models.BooleanField(blank=True, default=True, help_text='Show video controls.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='disable_kb',
            field=models.BooleanField(blank=True, default=False, help_text='Causes the player to not respond to keyboard controls.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='enable_js_api',
            field=models.BooleanField(blank=True, default=False, help_text='Enables the player to be controlled via iFrame Player API calls.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='height',
            field=models.IntegerField(blank=True, default=315, help_text='The height of the player in pixels.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='loop',
            field=models.BooleanField(blank=True, default=False, help_text='Causes the player to play the initial video again and again.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='origin',
            field=models.URLField(blank=True, help_text='The domain of the website that will be allowed to embed the player. Required by enable_js_api.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='video_id',
            field=models.TextField(blank=True, help_text='The ID of the video to play.'),
        ),
        migrations.AlterField(
            model_name='youtubevideopage',
            name='width',
            field=models.IntegerField(blank=True, default=560, help_text='The width of the player in pixels.'),
        ),
    ]