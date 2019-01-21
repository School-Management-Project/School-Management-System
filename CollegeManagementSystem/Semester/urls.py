from django.conf.urls import url
from .views import index,SemesterViewSet
from rest_framework import routers



router = routers.SimpleRouter()

router.register(r'semester',SemesterViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]