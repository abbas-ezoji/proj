# Generated by Django 2.1.1 on 2018-12-28 11:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    

    operations = [
        migrations.CreateModel(
            name='villaDateStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('statusId', models.IntegerField()),
                ('villaId', models.IntegerField()),
                ('JDate', models.CharField(max_length=20)),
            ],
        ),
    ]
