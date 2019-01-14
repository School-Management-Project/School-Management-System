from .models import Student,Department,Courses,Faculty,Subject
from .models import Parent,Semester,SubjectFaculty
# from .models import Semester,SubjectFaculty
from django.views.decorators.csrf import csrf_exempt

from .serializers import StudentSerializer, DepartmentSerializer, CoursesSerializer
from .serializers import FacultySerializer, SemesterSerializer, SubjectSerializer 
from .serializers import SubjectFacultySerializer, ParentSerializer
# from .serializers import SubjectFacultySerializer



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

class SubjectFacultyViewSet(viewsets.ModelViewSet):
    queryset = SubjectFaculty.objects.all()
    serializer_class = SubjectFacultySerializer


class ParentViewSet(viewsets.ModelViewSet):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer