from .models import Courses
from .serializers import CoursesSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view




@api_view(['GET','POST'])
def CoursesList(request,format=None):
    if request.method == 'GET':
        course = Courses.objects.all()
        serializer = CoursesSerializer(course,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
        try:
            course = Courses.objects.get(coursename = request.data['coursename'])
            return Response(serializer.data,status = status.HTTP_409_Conflict)

        except Courses.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = CoursesSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','POST'])
def DeptCourseList(request,pk,format=None):
    if request.method == 'GET':
        course = Courses.objects.filter(deptid=pk)
        serializer = CoursesSerializer(course,many=True)
        return Response(serializer.data)


@api_view(['GET','PUT','DELETE'])
def CourseDetail(request,pk,format=None):
    # print("coming\n\n")
    try:
        course = Courses.objects.get(pk=pk)
    except Courses.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = CoursesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = CoursesSerializer(course)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CoursesSerializer(course,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
