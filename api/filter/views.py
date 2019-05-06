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



class villaFilter(filters.FilterSet):
    date__lt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='lt',distinct=True)
    date__gt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='gt',distinct=True)
    status = filters.BooleanFilter(field_name='villadatestatus__statusId',method='sum_ststus')
    villaCategory = filters.NumberFilter(field_name='villaCategory',distinct=True)

    def sum_ststus(self,queryset, name, value):
        result = queryset.filter(villadatestatus__statusId__gt=0).annotate(statusId_sum=Count('villadatestatus__statusId')).filter(statusId_sum__lte=0)
        # with open('C:/MyFiles/DjangoProjects/adib/logs.txt', 'a') as log:
        #     log.write('\ncall sum_ststus: ' + str(result))
        return result

    class Meta:
        model =  models.Villa
        fields = ('villaCategory','date__lt','date__gt','status')

class ListTodoVilla(generics.ListAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaFilter
    # print ((serializer_class.data))
    # import pdb
    # pdb.set_trace()

@csrf_exempt
@api_view(['GET'])
@permission_classes([AllowAny, ])
def villaListView(request):
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

class villaSatusDateFilter(filters.FilterSet):
    date__lt = filters.DateFilter(field_name='date',lookup_expr='lte',distinct=True)
    date__gt = filters.DateFilter(field_name='date',lookup_expr='gte',distinct=True)
    villaId = filters.NumberFilter(field_name='villaId',distinct=True)
    class Meta:
        model =  models.villaDateStatus
        fields = ('villaId','date__lt','date__gt',)

class ListTodoVillaSatusDate(generics.ListAPIView):
    queryset = models.villaDateStatus.objects.all()
    serializer_class = serializers.TodoSerializerVillaDateStatus
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaSatusDateFilter

class villaVotesFilter(filters.FilterSet):
    villa = filters.NumberFilter(field_name='villa',distinct=True)
    owner = filters.NumberFilter(field_name='owner', distinct=True)
    class Meta:
        model =  models.villaVote
        fields = ('villa','owner',)

class ListTodoVillaVotes(generics.ListAPIView):
    queryset = models.villaVote.objects.all()
    serializer_class = serializers.TodoSerializerVillVotes
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaVotesFilter

class villaGalaryFilter(filters.FilterSet):
    villaid = filters.NumberFilter(field_name='villa', distinct=True)
    class Meta:
        model =  models.Pictures
        fields = ('villaid',)

@permission_classes([AllowAny, ])
class getPictureGalaryByVillaID(generics.ListAPIView):
    queryset = models.Pictures.objects.all()
    serializer_class = serializers.TodoSerializerPictures
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaGalaryFilter
