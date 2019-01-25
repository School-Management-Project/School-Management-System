# from django.conf.urls import url
# from .views import ParentViewSet
# from rest_framework import routers
# from .views import index


# router = routers.SimpleRouter()

# router.register(r'parent',ParentViewSet)


# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^$',index, name="index")
# ]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('parents/', views.ParentList),
    path('parents/<int:pk>/', views.ParentDetail),
]

# urlpatterns = format_suffix_patterns(urlpatterns)