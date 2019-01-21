from django.conf.urls import url
from .views import CoursesViewSet
from rest_framework import routers
from .views import index

router = routers.SimpleRouter()

router.register(r'course',CoursesViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]