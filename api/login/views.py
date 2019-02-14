from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from app1 import models
from api import serializers
from rest_framework.generics import CreateAPIView

class register(CreateAPIView):
    queryset = models.customer.objects.all()
    serializer_class = serializers.serializerCostumer
    def customer_create(self, serializer_class):
        customer = self.request.data
        _ = serializer_class.save(customer=customer)
        return Response(_)

@api_view(['GET', 'POST'])
def login(request):
    print('ababsabskasm,as,a')
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
        print('post3121321')
        import pdb
        pdb.set_trace()
        serializer = serializers.serializerCostumer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
