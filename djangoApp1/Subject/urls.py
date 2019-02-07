# from django.conf.urls import url
# from .views import SubjectViewSet

# from rest_framework import routers

# router = routers.SimpleRouter()


# router.register(r'subject',SubjectViewSet)

# urlpatterns = router.urls

# urlpatterns += [
# ]


from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('subject/', views.SubjectList),
    path('subject/<int:pk>/', views.SubjectDetail),
]

# urlpatterns = format_suffix_patterns(urlpatterns)