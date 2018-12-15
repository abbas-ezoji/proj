from rest_framework import generics
from django_filters import rest_framework as filters

from app1 import models
from api import serializers
import datetime

class ListTodoVilla(generics.ListAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla
    # import pdb;
    # pdb.set_trace()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('title','villaCategory',)
