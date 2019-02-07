
# from django.contrib.auth import authenticate
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
import json
from .models import Student
from .serializers import StudentSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from tools.token import create_jwt,verify_jwt

@api_view(['GET','POST'])
# @permission_classes((IsAuthenticated, ))
def StudentList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

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
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

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
    
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['PUT','DELETE'])
def StudentEdit(request,uname,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

    
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
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

    if request.method == "POST":
        try:
            Student.objects.get(susername=request.data['uname'],passwd=request.data['passwd'])
            token = create_jwt(request.data['uname'])
            return Response(token,status=status.HTTP_200_OK)
        except Student.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT','DELETE'])
def StudentDetailByUname(request,uname,format=None):
    if request.method == 'GET':
        student = Student.objects.get(susername=uname)
        serializer = StudentSerializer(student)
        return Response(serializer.data)



@api_view(['GET','POST'])
# @permission_classes((IsAuthenticated, ))
def StudentDetailByDept(request,id,format=None):
    if request.method == 'GET':
        student = Student.objects.filter(deptid = id)
        serializer = StudentSerializer(student,many=True)
        return Response(serializer.data)



@api_view(['GET','POST'])
# @permission_classes((IsAuthenticated, ))
def StudentDetailByCourse(request,deptid,courseid,format=None):
    if request.method == 'GET':
        dept = Student.objects.filter(deptid = deptid)
        course = Student.objects.filter(courseid = courseid)
        student = Student.objects.filter(deptid=deptid).filter(courseid=courseid)
        serializer = StudentSerializer(student,many=True)
        return Response(serializer.data)



# @api_view(['GET','POST'])
# def create_jwt(request):

#     """
#     the above token need to be saved in database, and a one-to-one
#     relation should exist with the username/user_pk
#     """

#     # username = request.POST['username']
#     # password = request.POST['password']
#     user = Student.objects.get(susername='arati')

#     current = datetime.now()
#     expiry = str(current + timedelta(days=1))

#     print(current,"\n",expiry)
#     token = jws.sign({'username': user.susername, 'expiry':expiry}, 'seKre8',  algorithm='HS256')
#     print("token",token)



#     try:
#         decoded_dict = jws.verify(token, 'seKre8', algorithms=['HS256'])
#         print("dict", decoded_dict)
#     except:
#         print("error")        

#     token = token + 'a'
#     print("token",token)



#     try:
#         decoded_dict = jws.verify(token, 'seKre8', algorithms=['HS256'])
#         print("dict",decoded_dict)
#     except:
#         print("error")        


#     if(flag == 1):
#         student.
#     # username = decoded_dict.get('username', None)
#     # expiry = decoded_dict.get('expiry', None)

#     return HttpResponse(token)