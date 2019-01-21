from django.views.decorators.csrf import csrf_exempt
from django.views import generic
from django.http import HttpResponse

from rest_framework import viewsets, filters

from .serializers import SubjectSerializer 
from .models import Subject


class SubjectViewSet(viewsets.ModelViewSet):
    '''
    Get all Subject
    '''
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
