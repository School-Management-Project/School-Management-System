from django.conf.urls import url
from .views import DepartmentViewSet
from rest_framework import routers
from .views import index


router = routers.SimpleRouter()

router.register(r'department',DepartmentViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]