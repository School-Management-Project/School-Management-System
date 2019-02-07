# from django.conf.urls import url
# from .views import StudentViewSet, SpecificStudentViewSet
# from rest_framework import routers

# router = routers.SimpleRouter()

# router.register(r'student',StudentViewSet)
# router.register(r'student/(?P<rollno>.+)', SpecificStudentViewSet)

# urlpatterns = router.urls

# urlpatterns += [
#     # url(r'^$',index, name="index")
# ]

# from rest_framework_jwt.views import obtain_jwt_token

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('students/', views.StudentList),
    path('student/<int:pk>/', views.StudentDetail),
    path('studentEdit/<uname>/', views.StudentEdit),
    path('student/<uname>/', views.StudentDetailByUname),
    path('studentauth/', views.studentLogin),
    # path('token-auth/', obtain_jwt_token)

]

# urlpatterns = format_suffix_patterns(urlpatterns)