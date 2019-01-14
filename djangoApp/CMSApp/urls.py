from django.conf.urls import url
from .views import StudentViewSet, index, SpecificStudentViewSet,DepartmentViewSet,CoursesViewSet,FacultyViewSet,SemesterViewSet,SubjectViewSet,SubjectFacultyViewSet
from .views import ParentViewSet
from rest_framework import routers

router = routers.SimpleRouter()

router.register(r'student',StudentViewSet)
router.register(r'student/(?P<rollno>.+)', SpecificStudentViewSet)
router.register(r'department',DepartmentViewSet)
router.register(r'course',CoursesViewSet)
router.register(r'faculty',FacultyViewSet)
router.register(r'subject',SubjectViewSet)
router.register(r'semester',SemesterViewSet)
router.register(r'subjectfaculty',SubjectFacultyViewSet)
router.register(r'parent',ParentViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]