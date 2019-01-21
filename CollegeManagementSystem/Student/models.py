from django.db import models
from compositefk.fields import CompositeForeignKey


class Student(models.Model):
    rollno = models.AutoField(primary_key=True)
    studname = models.CharField(max_length=50)
    studaddress = models.CharField(max_length=100)
    studmobileno = models.IntegerField()
    studemail = models.EmailField()

    deptid = models.ForeignKey('Department.Department',on_delete=models.CASCADE)
    courseid = models.ForeignKey('Courses.Courses',on_delete=models.CASCADE)
    semid = models.ForeignKey('Semester.Semester',on_delete=models.CASCADE)
    
    def __str__(self):
        return self.studname
