# Generated by Django 4.1 on 2022-08-14 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scope', '0010_employee_manager_user_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='department',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AddField(
            model_name='user',
            name='designation',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AddField(
            model_name='user',
            name='manager_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='user_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]