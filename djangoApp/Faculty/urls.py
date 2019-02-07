# from django.conf.urls import url
# from .views import FacultyViewSet
# from rest_framework import routers
# from .views import index


# router = routers.SimpleRouter()

# router.register(r'faculty',FacultyViewSet)

# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^$',index, name="index")
# # ]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('facultys/', views.FacultyList),
    path('facultys/<int:pk>/', views.FacultyDetail),
    path('facultyEdit/<uname>/', views. facultyDetailByUname),
    path('faculty/<uname>/', views.facultyDetailByUname),
    path('facultyauth/', views.facultyLogin),
]

# urlpatterns = format_suffix_patterns(urlpatterns)