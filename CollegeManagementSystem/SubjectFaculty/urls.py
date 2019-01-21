from django.conf.urls import url
from .views import SubjectFacultyViewSet

from rest_framework import routers

router = routers.SimpleRouter()


router.register(r'subjectfaculty',SubjectFacultyViewSet)

urlpatterns = router.urls

urlpatterns += [
]