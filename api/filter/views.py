from rest_framework import generics
from django_filters import rest_framework as filters
from django.db.models import Sum
from app1 import models
from api import serializers
import datetime

class villaFilter(filters.FilterSet):
    date__lt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='lt',distinct=True)
    date__gt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='gt',distinct=True)
    status = filters.BooleanFilter(field_name='villadatestatus__statusId',method='sum_ststus')
    villaCategory = filters.NumberFilter(field_name='villaCategory',distinct=True)
    # with open('E:/logs.txt','a') as log:
    #     log.write(str(status__in))
    def sum_ststus(self,queryset, name, value):
        return queryset.annotate(statusId__sum=Sum('villadatestatus__statusId')).filter(statusId__sum=0)

    class Meta:
        model =  models.Villa
        fields = ('villaCategory','date__lt','date__gt','status')

class ListTodoVilla(generics.ListAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaFilter

    # import pdb
    # pdb.set_trace()

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