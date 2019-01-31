# Generated by Django 2.1.1 on 2019-01-31 21:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='hotel',
            options={'verbose_name': 'هتل'},
        ),
        migrations.AlterModelOptions(
            name='pictures',
            options={'verbose_name': 'عکس'},
        ),
        migrations.AlterModelOptions(
            name='restaurant',
            options={'verbose_name': 'رستوران'},
        ),
        migrations.AlterModelOptions(
            name='tour',
            options={'verbose_name': 'تور'},
        ),
        migrations.AlterModelOptions(
            name='villa',
            options={'ordering': ('-pub_date',), 'verbose_name': 'ویلا'},
        ),
        migrations.AlterModelOptions(
            name='villacategory',
            options={'verbose_name': 'دسته بندی ویلا'},
        ),
        migrations.AlterModelOptions(
            name='villastatus',
            options={'verbose_name': 'وضعیت ویلا'},
        ),
        migrations.AlterModelOptions(
            name='villavote',
            options={'verbose_name': 'نظرات ویلا'},
        ),


    ]
