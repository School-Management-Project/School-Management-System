# from django.conf.urls import url
# from .views import CoursesViewSet
# from rest_framework import routers
# from .views import index

# router = routers.SimpleRouter()

# router.register(r'course',CoursesViewSet)


# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^$',index, name="index")
# ]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('courses/', views.CoursesList),
    path('courses/<int:pk>/', views.CourseDetail),
    path('courses/dept/<int:pk>/', views.DeptCourseList),
]

# urlpatterns = format_suffix_patterns(urlpatterns)