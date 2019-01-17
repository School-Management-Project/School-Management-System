from django.conf.urls import url
from .views import StudentViewSet, index, SpecificStudentViewSet,DepartmentViewSet,CoursesViewSet,FacultyViewSet,SemesterViewSet,SubjectViewSet,SubjectFacultyViewSet
from .views import ParentViewSet

urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]