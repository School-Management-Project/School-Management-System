from django.conf.urls import url
from .views import SubjectViewSet

from rest_framework import routers

router = routers.SimpleRouter()


router.register(r'subject',SubjectViewSet)

urlpatterns = router.urls

urlpatterns += [
]