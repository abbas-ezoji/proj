# Generated by Django 2.1.1 on 2018-12-09 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0027_auto_20181209_1756'),
    ]

    operations = [
        migrations.AlterField(
            model_name='villastatus',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
    ]
