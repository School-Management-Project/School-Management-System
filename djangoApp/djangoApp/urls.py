from django.contrib import admin
from django.conf.urls import url, include
from rest_framework.authtoken import views

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    url(r'admin/', admin.site.urls),
    url(r'^', include('Courses.urls')),
    url(r'^', include('Department.urls')),
    url(r'^', include('Faculty.urls')),
    url(r'^', include('Parent.urls')),
    url(r'^', include('Semester.urls')),
    url(r'^', include('Student.urls')),
    url(r'^', include('Subject.urls')),
    url(r'^', include('SubjectFaculty.urls')),
    url(r'^', include('LogTable.urls')),
    # # url(r'^api-token-auth/', views.obtain_auth_token),
    # url(r'^api/token/',TokenObtainPairView.as_view()),
    # url(r'api/token/refresh', TokenRefreshView.as_view())
]
