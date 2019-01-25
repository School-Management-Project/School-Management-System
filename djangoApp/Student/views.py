# from .models import Student
# from django.views.decorators.csrf import csrf_exempt

# from .serializers import StudentSerializer

# from django.views import generic
# from rest_framework import viewsets, filters
# from django.http import HttpResponse

# class StudentViewSet(viewsets.ModelViewSet):
#     '''
#     Get all student's records
#     '''
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer


# class SpecificStudentViewSet(viewsets.ModelViewSet):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer

#     def get_queryset(self):
#         no = self.kwargs['rollno']
#         return Student.objects.filter(rollno=no)

from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

from .models import Student
from .serializers import StudentSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated


@api_view(['GET','POST'])
# @permission_classes((IsAuthenticated, ))
def StudentList(request,format=None):

    if request.method == 'GET':
        student = Student.objects.all()
        serializer = StudentSerializer(student,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        try:
            student = Student.objects.get(studname = request.data['susername'])
            # print(request.data['susername'])
            return HttpResponse(status = status.HTTP_409_CONFLICT)

        except Student.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = StudentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT','DELETE'])
def StudentDetail(request,pk,format=None):
    # print("coming\n\n")
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)


@api_view(['PUT','DELETE'])
def StudentEdit(request,uname,format=None):
    
    try:
        student = Student.objects.get(susername = uname)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StudentSerializer(student,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def studentLogin(request,format=None):
    if request.method == "POST":
        try:
            Student.objects.get(susername=request.data['uname'],passwd=request.data['passwd'])
            return Response(status=status.HTTP_200_OK)
        except Student.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT','DELETE'])
def StudentDetailByUname(request,uname,format=None):
    if request.method == 'GET':
        student = Student.objects.get(susername=uname)
        serializer = StudentSerializer(student)
        return Response(serializer.data)