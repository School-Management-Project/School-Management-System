from django.conf.urls import url
from .views import StudentViewSet, SpecificStudentViewSet
from rest_framework import routers

router = routers.SimpleRouter()

router.register(r'student',StudentViewSet)
router.register(r'student/(?P<rollno>.+)', SpecificStudentViewSet)

urlpatterns = router.urls

urlpatterns += [
    # url(r'^$',index, name="index")
]