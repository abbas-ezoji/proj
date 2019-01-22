# Generated by Django 2.1.1 on 2019-01-22 10:17

from decimal import Decimal
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import djmoney.models.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app1', '0004_auto_20190108_0713'),
    ]

    operations = [
        migrations.CreateModel(
            name='villaVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='توضیحات')),
                ('rate', models.IntegerField(blank=True, default=0, null=True, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(-5)], verbose_name='نمره')),
                ('category', models.IntegerField(blank=True, default=0, null=True, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(-1)], verbose_name='دسته')),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),

        migrations.AddField(
            model_name='villavote',
            name='villa',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app1.Villa'),
        ),
    ]
