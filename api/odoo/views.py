from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from django_filters import rest_framework as filters
from django.db.models import Sum,Count
from app1 import models
from api import serializers
import datetime

@csrf_exempt
@api_view(['GET'])
@permission_classes([AllowAny, ])
def company(request):
    # permission_classes = (IsAuthenticated,)
    if request.method == 'GET':
        id = request.GET['id']
        status = request.GET['status']
        fromdate = str(request.GET['fromdate'])
        todate = str(request.GET['todate'])
        villaCategory = request.GET['villaCategory']
        minPrice = request.GET['minPrice']
        maxPrice = request.GET['maxPrice']
        query = 'SELECT * FROM public.get_villas({},{},{},{},{},{},{})'.format(id,status,fromdate,todate,villaCategory,minPrice,maxPrice)
        print(query)
        # with connection.cursor() as cursor:
        #     villa = cursor.callproc('public.getfoo', [id])
        #     print('getfoo')
        villa = models.Villa.objects.raw(query)
        serializer = serializers.TodoSerializerVilla(villa, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = serializers.TodoSerializerVilla(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

