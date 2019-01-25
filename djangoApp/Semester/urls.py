# from django.conf.urls import url
# from .views import index,SemesterViewSet
# from rest_framework import routers



# router = routers.SimpleRouter()

# router.register(r'semester',SemesterViewSet)


# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^$',index, name="index")
# ]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('semesters/', views.SemesterList),
    path('semesters/<int:pk>/', views.SemesterDetail),
]

# urlpatterns = format_suffix_patterns(urlpatterns)