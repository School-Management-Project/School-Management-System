from .models import Parent
# from .models import Semester,SubjectFaculty
from django.views.decorators.csrf import csrf_exempt

from .serializers import ParentSerializer
# from .serializers import SubjectFacultySerializer



from django.views import generic
from rest_framework import viewsets, filters
from django.http import HttpResponse

@csrf_exempt
def index(request):
    return HttpResponse("hello")


class ParentViewSet(viewsets.ModelViewSet):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer