# Generated by Django 2.1.1 on 2019-01-08 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_auto_20190107_1103'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='villa',
            options={'ordering': ('-pub_date',)},
        ),
        migrations.AlterField(
            model_name='hotel',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='services',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='pictures',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='menu',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tour',
            name='Comment',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tour',
            name='DistAddress',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='villa',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='villa',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='villadatestatus',
            name='statusId',
            field=models.IntegerField(choices=[(0, 'آزاد'), (1, 'اجاره شده'), (2, 'رزرو شده'), (3, 'دردست تعمیر'), (4, 'اجاره داده نمی شود')], default=1),
        ),
        migrations.AlterField(
            model_name='villastatus',
            name='STATUS_OF_VILLA',
            field=models.IntegerField(choices=[(0, 'آزاد'), (1, 'اجاره شده'), (2, 'رزرو شده'), (3, 'دردست تعمیر'), (4, 'اجاره داده نمی شود')], default=1),
        ),
    ]
