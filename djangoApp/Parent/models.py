from django.db import models
from compositefk.fields import CompositeForeignKey



#Parent Table
class Parent(models.Model):
    parentid = models.AutoField(primary_key=True)
    parentname = models.CharField(max_length=20)
    pusername = models.CharField(max_length=10)
    passwd = models.CharField(max_length=6)
    # rollno = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudRollNo'))
    # did = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudDid'))
    srn = models.ForeignKey('Student.Student',on_delete=models.CASCADE)
    sdn = models.ForeignKey('Department.Department',on_delete=models.CASCADE)

    # prn = models.ForeignKey('Student',on_delete=models.CASCADE)
    # prn = CompositeForeignKey('Student',
    #         on_delete=models.CASCADE,
    #         to_fields={
    #             "rollno":"srn",
    #             "did":"sdn"
    #         })


    def __str__(self):
        return self.parentname
