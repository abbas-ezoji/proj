from rest_framework import generics
from django_filters import rest_framework as filters

from app1 import models
from api import serializers
import datetime

class villaFilter(filters.FilterSet):
    date__lt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='lt',distinct=True)
    date__gt = filters.DateFilter(field_name='villadatestatus__date',lookup_expr='gt',distinct=True)
    villaCategory = filters.NumberFilter(field_name='villaCategory',distinct=True)
    class Meta:
        model =  models.Villa
        fields = ('villaCategory','date__lt','date__gt',)

class ListTodoVilla(generics.ListAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaFilter
    # import pdb
    # pdb.set_trace()

class villaSatusDateFilter(filters.FilterSet):
    date__lt = filters.DateFilter(field_name='date',lookup_expr='lt',distinct=True)
    date__gt = filters.DateFilter(field_name='date',lookup_expr='gt',distinct=True)
    villaId = filters.NumberFilter(field_name='villaId',distinct=True)
    class Meta:
        model =  models.villaDateStatus
        fields = ('villaId','date__lt','date__gt',)

class ListTodoVillaSatusDate(generics.ListAPIView):
    queryset = models.villaDateStatus.objects.all()
    serializer_class = serializers.TodoSerializerVillaDateStatus
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = villaSatusDateFilter



