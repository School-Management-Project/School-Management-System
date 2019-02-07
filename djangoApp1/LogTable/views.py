from .models import LogTable
from .serializers import LogTableSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view



@api_view(['GET','POST'])
def LogList(request,format=None):
    if request.method == 'GET':
        log = LogTable.objects.all()
        serializer = LogTableSerializer(log,many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = LogTableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



