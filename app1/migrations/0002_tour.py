# Generated by Django 2.1.1 on 2018-10-22 07:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=200)),
                ('DistAddress', models.TextField()),
                ('photo', models.ImageField(blank=True, null=True, upload_to='app1/photos/')),
                ('Comment', models.TextField()),
                ('tags', models.CharField(max_length=200)),
                ('DepartureDate', models.DateTimeField()),
                ('ReturnDate', models.DateTimeField()),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
                ('writer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
