# Generated by Django 2.1.1 on 2019-01-22 10:26

from decimal import Decimal
import django.core.validators
from django.db import migrations, models
import djmoney.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_auto_20190122_1347'),
    ]

    operations = [

        migrations.AddField(
            model_name='villavote',
            name='pub_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),

    ]