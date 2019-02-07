# from django.conf.urls import url
# from .views import DepartmentViewSet
# from rest_framework import routers
# from .views import index


# router = routers.SimpleRouter()

# router.register(r'department',DepartmentViewSet)


# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^$',index, name="index")
# ]


from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('departments/', views.DepartmentList),
    path('departments/<int:pk>/', views.DepartmentDetail),
    path('departments/<deptname>/', views.DepartmentByName),
]

# urlpatterns = format_suffix_patterns(urlpatterns)