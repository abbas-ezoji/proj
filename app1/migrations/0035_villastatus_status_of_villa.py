# Generated by Django 2.1.1 on 2018-12-15 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0034_remove_villastatus_status_of_villa'),
    ]

    operations = [
        migrations.AddField(
            model_name='villastatus',
            name='STATUS_OF_VILLA',
            field=models.IntegerField(default=1),
        ),
    ]
