# Generated by Django 2.1.5 on 2019-01-14 10:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('CMSApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='parent',
            name='prn',
        ),
    ]
