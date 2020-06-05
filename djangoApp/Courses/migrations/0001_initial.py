# Generated by Django 2.1.5 on 2019-02-03 09:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Department', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('courseid', models.AutoField(primary_key=True, serialize=False)),
                ('coursename', models.CharField(max_length=100)),
                ('courseduration', models.IntegerField()),
                ('deptid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Department.Department')),
            ],
        ),
    ]