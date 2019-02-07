from Student.models import Student 
from rest_framework.decorators import api_view, permission_classes
from jose import jws
# from django.http import HttpResponse
from datetime import datetime
from datetime import timedelta



# @api_view(['GET','POST'])
def create_jwt(uname):
   
    current = datetime.now()
    expiry = str(current + timedelta(days=1))

    token = jws.sign({'username': uname, 'expiry':expiry}, 'seKre8',  algorithm='HS256')

    return token


def verify_jwt(request):
    token = request.data['Token']

    try:
        decoded_dict = jws.verify(token, 'seKre8', algorithms=['HS256'])
        di = (request.data).dict()
        del di['Token']

        return di
    except:
        return None
