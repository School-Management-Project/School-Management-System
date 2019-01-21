from django.conf.urls import url
from .views import ParentViewSet
from rest_framework import routers
from .views import index


router = routers.SimpleRouter()

router.register(r'parent',ParentViewSet)


urlpatterns = router.urls

urlpatterns += [
    url(r'^$',index, name="index")
]