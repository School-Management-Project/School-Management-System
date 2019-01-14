# from .models import Student,Department,Faculty,Coureses,Semester,Parent
# from .models import Student
from .models import Student,Department,Courses,Faculty,Subject,Semester
from django.views.decorators.csrf import csrf_exempt
from .serializers import StudentSerializer,DepartmentSerializer,CoursesSerializer,FacultySerializer,SemesterSerializer,SubjectSerializer


# from .serializers import StudentSerializer,DepartmentSerializer,CoursesSerializer,SemesterSerializer,SubjectSerializer,FacultySerializer

from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

@csrf_exempt
def index(request):
    return HttpResponse("hello")


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



class DepartmentViewSet(viewsets.ModelViewSet):
    '''
    Get all student's records
    '''
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class CoursesViewSet(viewsets.ModelViewSet):
    '''
    Get all course records
    '''
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class SemesterViewSet(viewsets.ModelViewSet):
    '''
    Get all Semester
    '''
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer



class SubjectViewSet(viewsets.ModelViewSet):
    '''
    Get all Subject
    '''
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class FacultyViewSet(viewsets.ModelViewSet):
    '''
    Get all faculty
    '''
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

