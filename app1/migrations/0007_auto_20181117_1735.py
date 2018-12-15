# Generated by Django 2.1.1 on 2018-11-17 14:05

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0006_auto_20181117_1735'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='galaryPictures',
            field=models.ManyToManyField(to='app1.Pictures'),
        ),
        migrations.AlterField(
            model_name='tour',
            name='registeredUsers',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
