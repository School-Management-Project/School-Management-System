from django.db import models

#Department table
class Department(models.Model):
    deptid = models.AutoField(primary_key=True)
    deptname = models.CharField(max_length=100)
    deptlocation = models.CharField(max_length=100)
    deptkey = models.CharField(max_length=10)

    def __str__(self):
        return self.deptname

