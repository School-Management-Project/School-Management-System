# from .models import SubjectFaculty

# from .serializers import SubjectFacultySerializer

# from django.views import generic
# from rest_framework import viewsets, filters
# from django.http import HttpResponse


# class SubjectFacultyViewSet(viewsets.ModelViewSet):
#     queryset = SubjectFaculty.objects.all()
#     serializer_class = SubjectFacultySerializer

from .models import SubjectFaculty
from .serializers import SubjectFacultySerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view




@api_view(['GET','POST'])
def SubjectFacultyList(request,format=None):
    if request.method == 'GET':
        subjectfaculty = SubjectFaculty.objects.all()
        serializer = SubjectFacultySerializer(subjectfaculty,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        serializer = SubjectFacultySerializer(data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
