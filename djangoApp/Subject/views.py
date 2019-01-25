# from django.views.decorators.csrf import csrf_exempt
# from django.views import generic
# from django.http import HttpResponse

# from rest_framework import viewsets, filters

# from .serializers import SubjectSerializer 
# from .models import Subject


# class SubjectViewSet(viewsets.ModelViewSet):
#     '''
#     Get all Subject
#     '''
#     queryset = Subject.objects.all()
#     serializer_class = SubjectSerializer




from .models import Subject
from .serializers import SubjectSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET','POST'])
def SubjectList(request,format=None):
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





#     if '@' in username:
#         kwargs = {'email': username}
#     else:
#             kwargs = {'username': username}
#     try:
#         user = User.objects.get(**kwargs)
#         if user.check_password(password):
#             return user
#     except User.DoesNotExist:
#         return None

# def get_user(self, user_id):
#     try:
#         return User.objects.get(pk=user_id)
#     except User.DoesNotExist:
#         return None