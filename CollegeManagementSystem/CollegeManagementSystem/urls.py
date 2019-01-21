from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [
    url(r'admin/', admin.site.urls),
    url(r'^', include('Courses.urls')),
    url(r'^', include('Department.urls')),
    url(r'^', include('Faculty.urls')),
    url(r'^', include('Parent.urls')),
    url(r'^', include('Semester.urls')),
    url(r'^', include('Student.urls')),
    url(r'^', include('Subject.urls')),
    url(r'^', include('SubjectFaculty.urls')),

]
