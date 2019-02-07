
from .models import Subject
from .serializers import SubjectSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from tools.token import verify_jwt



@api_view(['GET','POST'])
def SubjectList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

    if request.method == 'GET':
        subject = Subject.objects.all()
        serializer = SubjectSerializer(subject,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
        try:
            subject = Subject.objects.get(subname = request.data['subname'])
            return Response(serializer.data,status = status.HTTP_409_Conflict)

        except Subject.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = SubjectSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET','PUT','DELETE'])
def SubjectDetail(request,pk,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)

    # print("coming\n\n")
    try:
        subject = Subject.objects.get(pk=pk)
    except Subject.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SubjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = SubjectSerializer(subject)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SubjectSerializer(subject,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        subject.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

