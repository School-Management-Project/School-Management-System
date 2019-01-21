from .models import Department
from django.views.decorators.csrf import csrf_exempt

from .serializers import DepartmentSerializer

from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

@csrf_exempt
def index(request):
    return HttpResponse("hello")



class DepartmentViewSet(viewsets.ModelViewSet):
    '''
    Get all student's records
    '''
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
