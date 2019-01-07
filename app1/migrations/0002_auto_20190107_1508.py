# Generated by Django 2.1.1 on 2019-01-07 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='villa',
            options={'ordering': ('pub_date',)},
        ),
        migrations.AddField(
            model_name='villa',
            name='avgPrice',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='villa',
            name='maxPrice',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='villa',
            name='minPrice',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
