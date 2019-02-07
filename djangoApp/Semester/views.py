
from .models import Semester
from .serializers import SemesterSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from tools.token import verify_jwt




@api_view(['GET','POST'])
def SemesterList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)



    if request.method == 'GET':
        semester = Semester.objects.all()
        serializer = SemesterSerializer(semester,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
       
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SemesterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT','DELETE'])
def SemesterDetail(request,pk,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)



    # print("coming\n\n")
    try:
        semester = Semester.objects.get(pk=pk)
    except Semester.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SemesterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = SemesterSerializer(semester)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SemesterSerializer(semester,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        semester.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
