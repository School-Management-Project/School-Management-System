

from .models import Department
from .serializers import DepartmentSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view



@api_view(['GET','POST'])
def DepartmentList(request,format=None):
    if request.method == 'GET':
        department = Department.objects.all()
        serializer = DepartmentSerializer(department,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
        try:
            department = Department.objects.get(deptname = request.data['deptname'])
            return Response(serializer.data,status = status.HTTP_409_Conflict)

        except Department.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = DepartmentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT','DELETE'])
def DepartmentDetail(request,pk,format=None):
    # print("coming\n\n")
    try:
        department = Department.objects.get(pk=pk)
    except Department.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = DepartmentSerializer(department)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DepartmentSerializer(department,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        department.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
