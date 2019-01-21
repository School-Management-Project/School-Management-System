from .models import SubjectFaculty

from .serializers import SubjectFacultySerializer

from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse


class SubjectFacultyViewSet(viewsets.ModelViewSet):
    queryset = SubjectFaculty.objects.all()
    serializer_class = SubjectFacultySerializer
