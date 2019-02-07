from .models import LogTable
from .serializers import LogTableSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from tools.token import verify_jwt


@api_view(['GET','POST'])
def LogList(request,format=None):
    token = verify_jwt(request)
    
    if(token == None):
        return HttpResponse(status = status.HTTP_409_CONFLICT)



    if request.method == 'GET':
        log = LogTable.objects.all()
        serializer = LogTableSerializer(log,many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        request = verify_jwt(request)

        if(request):
            serializer = LogTableSerializer(data=request)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)



