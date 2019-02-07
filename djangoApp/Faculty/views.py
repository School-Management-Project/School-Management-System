
from .models import Faculty
from .serializers import FacultySerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from tools.token import create_jwt
from rest_framework.authtoken.models import Token
from tools.token import verify_jwt


@api_view(['GET','POST'])
def FacultyList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)


    if request.method == 'GET':
        faculty = Faculty.objects.all()
        serializer = FacultySerializer(faculty,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
        try:
            faculty = Faculty.objects.get(fusername = request.data['fusername'])
            return Response(serializer.data,status = status.HTTP_409_Conflict)

        except Faculty.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = FacultySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



        # serializer = StudentSerializer(data=request.data)
        # print(re)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data,status=status.HTTP_201_CREATED)
        # return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT','DELETE'])
def FacultyDetail(request,pk,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)


    # print("coming\n\n")
    try:
        faculty = Faculty.objects.get(pk=pk)
    except Faculty.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer =FacultySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = FacultySerializer(faculty)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FacultySerializer(aculty,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        faculty.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def facultyLogin(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)



    if request.method == "POST":
        try:
            Faculty.objects.get(fusername=request.data['uname'],passwd=request.data['passwd'])
            token = create_jwt(request.data['uname'])
            return Response(token,status=status.HTTP_200_OK)
        except Faculty.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def facultyDetailByUname(request,uname,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)




    try:
        faculty = Faculty.objects.get(fusername = uname)
        print(faculty)
    except Faculty.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer =FacultySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = FacultySerializer(faculty)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FacultySerializer(faculty,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        faculty.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

