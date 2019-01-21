from .models import Faculty
from django.views.decorators.csrf import csrf_exempt

from .serializers import FacultySerializer 



from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

@csrf_exempt
def index(request):
    return HttpResponse("hello")

class FacultyViewSet(viewsets.ModelViewSet):
    '''
    Get all faculty
    '''
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
