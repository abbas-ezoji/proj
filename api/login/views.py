
from rest_framework.decorators import api_view
from rest_framework.response import Response
from app1 import models
from api import serializers

@api_view(['GET', 'POST'])
def login(request):
    if request.method == 'GET':
        username = request.GET['username']
        password = request.GET['password']
        query = 'SELECT * FROM public.get_login({},{})'.format(username,password)
        print(query)
        # with connection.cursor() as cursor:
        #     villa = cursor.callproc('public.getfoo', [id])
        #     print('getfoo')
        customer = models.customer.objects.raw(query)
        serializer = serializers.serializerCostumer(customer, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = serializers.serializerCostumer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
