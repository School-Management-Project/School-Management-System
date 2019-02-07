from django.db import models
from compositefk.fields import CompositeForeignKey

#faculty_Subject Table

class SubjectFaculty(models.Model):
    subcode = models.ForeignKey('Subject.Subject',on_delete=models.CASCADE)
    facultyid = models.ForeignKey("Faculty.Faculty",on_delete=models.CASCADE)

