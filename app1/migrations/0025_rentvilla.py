# Generated by Django 2.1.1 on 2018-12-09 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0024_auto_20181203_0552'),
    ]

    operations = [
        migrations.CreateModel(
            name='rentVilla',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
                ('rentDate', models.DateTimeField()),
                ('isRented', models.BooleanField(default=False)),
                ('villa', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app1.Villa')),
            ],
        ),
    ]
