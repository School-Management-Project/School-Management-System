from django.db import models
from compositefk.fields import CompositeForeignKey


class Student(models.Model):
    rollno = models.IntegerField()
    studname = models.CharField(max_length=50)
    studaddress = models.CharField(max_length=100)
    studmobileno = models.IntegerField()
    studemail = models.EmailField()

    did = models.ForeignKey('Department',on_delete=models.CASCADE)
    courseid = models.ForeignKey('Courses',on_delete=models.CASCADE)
    semid = models.ForeignKey('Semester',on_delete=models.CASCADE)
    subcode = models.ForeignKey('Subject',on_delete=models.CASCADE)
    

    class Meta:
        unique_together = (('rollno','did'),)

    def __str__(self):
        return self.studname


#Department table
class Department(models.Model):
    deptid = models.AutoField(primary_key=True)
    deptname = models.CharField(max_length=100)
    deptlocation = models.CharField(max_length=100)

    def __str__(self):
        return self.deptname

#Faculty Table
class Faculty(models.Model):
    facultyid = models.AutoField(primary_key=True)
    facultyname = models.CharField(max_length=100)
    facultymobileno = models.IntegerField()
    facultyemail = models.EmailField()
    facultysalary = models.IntegerField()

    # subcode = models.ManyToManyField('Subject',blank=True)
    # student = models.ForeignKey('Student',on_delete=models.CASCADE)
    courseid = models.ForeignKey('Courses',on_delete=models.CASCADE)

    def __str__(self):
        return self.facultyname

#Courses Table
class Courses(models.Model):
    courseid = models.AutoField(primary_key=True)
    coursename = models.CharField(max_length=100)
    courseduration = models.IntegerField()
    #student = models.ManyToManyField('Student', blank = True, )

    def __str__(self):
        return self.coursename


class Semester(models.Model):
    semid = models.IntegerField()
    semdetails = models.CharField(max_length=20)
    semduration = models.IntegerField()

    #subcode = models.ForeignKey('Subject',on_delete=models.CASCADE)#one to many relation
    courseid = models.ForeignKey('Courses',on_delete=models.CASCADE)

    def __str__(self):
        return self.semid



#Subject Table
class Subject(models.Model):
    subcode = models.CharField(max_length=3,primary_key=True)
    subname = models.CharField(max_length = 10)

    courseid = models.ForeignKey('Courses',on_delete=models.CASCADE)
    semid = models.ForeignKey('Semester',on_delete=models.CASCADE)
   # facultyid = models.ManyToManyField('Subject',blank=True)
#    subcode = models.ManyToManyField('Subject',blank = True)

    def __str__(self):
        return self.subcode

#faculty_Subject Table

class SubjectFaculty(models.Model):
    subcode = models.ForeignKey('Subject',on_delete=models.CASCADE)
    facultyid = models.ForeignKey("Faculty",on_delete=models.CASCADE)

    
#Parent Table
class Parent(models.Model):
    parentid = models.IntegerField()
    parentname = models.CharField(max_length=20)
    # rollno = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudRollNo'))
    # did = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudDid'))
    srn = models.ForeignKey('Student',on_delete=models.CASCADE, related_name=('ParentStudRollNo'))
    sdn = models.ForeignKey('Department',on_delete=models.CASCADE)

    # prn = models.ForeignKey('Student',on_delete=models.CASCADE)
    # prn = CompositeForeignKey('Student',
    #         on_delete=models.CASCADE,
    #         to_fields={
    #             "rollno":"srn",
    #             "did":"sdn"
    #         })
