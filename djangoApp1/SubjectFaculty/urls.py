# from django.conf.urls import url
# from .views import SubjectFacultyViewSet

# from rest_framework import routers

# router = routers.SimpleRouter()


# router.register(r'subjectfaculty',SubjectFacultyViewSet)

# urlpatterns = router.urls

# urlpatterns += [
# ]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('subjectfaculty/', views.SubjectFacultyList),
    # path('subjectfaculty/<int:pk>/', views.SubjectDetail),
]

# urlpatterns = format_suffix_patterns(urlpatterns)