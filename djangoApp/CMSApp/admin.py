from django.contrib import admin
# from .models import Student
from .models import Student,Department,Courses,Faculty,Subject,Semester
from .models import Parent

# Register your models here.
admin.site.register(Student)
admin.site.register(Department)
admin.site.register(Courses)
admin.site.register(Faculty)
admin.site.register(Subject)
admin.site.register(Semester)
admin.site.register(Parent)
