from django.db import models
from compositefk.fields import CompositeForeignKey



#Parent Table
class Parent(models.Model):
    parentid = models.AutoField(primary_key=True)
    parentname = models.CharField(max_length=20)
    # rollno = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudRollNo'))
    # did = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudDid'))
    srn = models.ForeignKey('Student.Student',on_delete=models.CASCADE, related_name=('ParentStudRollNo'))
    sdn = models.ForeignKey('Department.Department',on_delete=models.CASCADE)

    # prn = models.ForeignKey('Student',on_delete=models.CASCADE)
    # prn = CompositeForeignKey('Student',
    #         on_delete=models.CASCADE,
    #         to_fields={
    #             "rollno":"srn",
    #             "did":"sdn"
    #         })
