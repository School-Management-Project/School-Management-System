from django.db import models

#Courses Table
class Courses(models.Model):
    courseid = models.AutoField(primary_key=True)
    coursename = models.CharField(max_length=100)
    courseduration = models.IntegerField()
    deptid = models.ForeignKey('Department.Department',on_delete=models.CASCADE)

    def __str__(self):
        return self.coursename
