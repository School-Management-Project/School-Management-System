from django.db import models
from compositefk.fields import CompositeForeignKey
from Courses.models import Courses

#Faculty Table
class Faculty(models.Model):
    facultyid = models.AutoField(primary_key=True)
    facultyname = models.CharField(max_length=100)
    facultymobileno = models.IntegerField()
    facultyemail = models.EmailField()
    facultysalary = models.IntegerField()

    # subcode = models.ManyToManyField('Subject',blank=True)
    # student = models.ForeignKey('Student',on_delete=models.CASCADE)
    courseid = models.ForeignKey('Courses.Courses',on_delete=models.CASCADE)

    def __str__(self):
        return self.facultyname
