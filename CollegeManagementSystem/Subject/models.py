from django.db import models
from compositefk.fields import CompositeForeignKey



#Subject Table
class Subject(models.Model):
    subcode = models.AutoField(primary_key=True)
    subname = models.CharField(max_length = 25)

    courseid = models.ForeignKey('Courses.Courses',on_delete=models.CASCADE)
    semid = models.ForeignKey('Semester.Semester',on_delete=models.CASCADE)
   # facultyid = models.ManyToManyField('Subject',blank=True)

    def __str__(self):
        return self.subcode
