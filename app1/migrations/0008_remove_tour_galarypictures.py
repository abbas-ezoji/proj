# Generated by Django 2.1.1 on 2018-11-17 14:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0007_auto_20181117_1735'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tour',
            name='galaryPictures',
        ),
    ]
