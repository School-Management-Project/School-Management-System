from .models import Courses
from .serializers import CoursesSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.views import generic
from rest_framework import viewsets, filters



@csrf_exempt
def index(request):
    return HttpResponse("hello")



class CoursesViewSet(viewsets.ModelViewSet):
    '''
    Get all course records
    '''
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer

