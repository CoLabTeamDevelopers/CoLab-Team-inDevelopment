# Generated by Django 4.2.6 on 2023-10-26 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_user_id_post_user_remove_post_post_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='user',
            new_name='user_id',
        ),
        migrations.RemoveField(
            model_name='post',
            name='id',
        ),
        migrations.RemoveField(
            model_name='task',
            name='id',
        ),
        migrations.AddField(
            model_name='post',
            name='post_id',
            field=models.BigAutoField(default='null', primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='task',
            name='task_id',
            field=models.BigAutoField(default='null', primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
