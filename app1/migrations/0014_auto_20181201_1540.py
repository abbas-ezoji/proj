# Generated by Django 2.1.1 on 2018-12-01 12:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0013_auto_20181126_1645'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tour',
            old_name='Title',
            new_name='title',
        ),
    ]
