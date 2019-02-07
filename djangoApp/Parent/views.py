
from .models import Parent
from .serializers import ParentSerializer
# from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from tools.token import verify_jwt




@api_view(['GET','POST'])
def ParentList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)



    if request.method == 'GET':
        parent = Parent.objects.all()
        serializer = ParentSerializer(parent,many=True)
        return Response(serializer.data)


    if request.method == 'POST':
        # print(request.data['studname'])
        try:
            parent = Parent.objects.get(pusername = request.data['pusername'])
            return Response(serializer.data,status = status.HTTP_409_Conflict)

        except Parent.DoesNotExist:
            # return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = ParentSerializer(data=request.data)
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
def ParentDetail(request,pk,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)




    # print("coming\n\n")
    try:
        parent = Parent.objects.get(pk=pk)
    except Parent.DoesNotExist:
        # return Response(status=status.HTTP_404_NOT_FOUND)
        serializer =ParentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
    if request.method == 'GET':
        serializer = ParentSerializer(parent)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ParentSerializer(aculty,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        parent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
