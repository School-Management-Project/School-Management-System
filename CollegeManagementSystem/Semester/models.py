from django.db import models
from compositefk.fields import CompositeForeignKey



class Semester(models.Model):
    semid = models.AutoField(primary_key=True)
    semdetails = models.CharField(max_length=20)
    semduration = models.IntegerField()

    #subcode = models.ForeignKey('Subject',on_delete=models.CASCADE)#one to many relation
    courseid = models.ForeignKey('Courses.Courses',on_delete=models.CASCADE)

    def __str__(self):
        return self.semid


