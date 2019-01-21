from .models import Semester
from django.views.decorators.csrf import csrf_exempt

from .serializers import SemesterSerializer 

from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

@csrf_exempt
def index(request):
    return HttpResponse("hello")


class SemesterViewSet(viewsets.ModelViewSet):
    '''
    Get all Semester
    '''
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer


