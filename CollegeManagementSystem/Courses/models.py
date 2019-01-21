from django.db import models

#Courses Table
class Courses(models.Model):
    courseid = models.AutoField(primary_key=True)
    coursename = models.CharField(max_length=100)
    courseduration = models.IntegerField()
    #student = models.ManyToManyField('Student', blank = True, )

    def __str__(self):
        return self.coursename

