# Generated by Django 2.1.5 on 2019-02-03 09:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('semid', models.AutoField(primary_key=True, serialize=False)),
                ('semdetails', models.CharField(max_length=50)),
                ('semduration', models.IntegerField()),
                ('courseid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Courses.Courses')),
            ],
        ),
    ]
