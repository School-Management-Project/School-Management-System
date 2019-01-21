from django.conf.urls import url
from .views import FacultyViewSet
from rest_framework import routers
from .views import index


router = routers.SimpleRouter()

router.register(r'faculty',FacultyViewSet)

urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]