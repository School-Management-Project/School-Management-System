from .models import Student
from django.views.decorators.csrf import csrf_exempt

from .serializers import StudentSerializer

from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

class StudentViewSet(viewsets.ModelViewSet):
    '''
    Get all student's records
    '''
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class SpecificStudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get_queryset(self):
        no = self.kwargs['rollno']
        return Student.objects.filter(rollno=no)
