# Generated by Django 2.1.1 on 2018-12-16 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0041_auto_20181215_0523'),
    ]

    operations = [
        migrations.AddField(
            model_name='villa',
            name='serchArea',
            field=models.CharField(max_length=600, null=True),
        ),
    ]
