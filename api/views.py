from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.decorators import api_view, permission_classes
from app1 import models
from . import serializers
import datetime


class ListTodoRest(generics.ListCreateAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.TodoSerializerRest


class DetailTodoRest(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Restaurant.objects.all()
    serializer_class = serializers.TodoSerializerRest

class ListTodoTour(generics.ListCreateAPIView):
    queryset = models.Tour.objects.all()
    serializer_class = serializers.TodoSerializerTour


class DetailTodoRestTour(generics.RetrieveAPIView):
    queryset = models.Tour.objects.all()
    serializer_class = serializers.TodoSerializerTour

class ListTodoPictures(generics.ListCreateAPIView):
    queryset = models.Pictures.objects.all()
    serializer_class = serializers.TodoSerializerPictures

class DetailTodoRestPictures(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Pictures.objects.all()
    serializer_class = serializers.TodoSerializerPictures

def getTourPics(request, tour_id):
   # Delegate to the view جنریک and get an HttpResponse.
    response = ListTodoPictures.get_object(
    request,
    queryset=models.Pictures.objects.filter(id=tour_id),
    object_id=tour_id,
    )

        # Record the last accessed date. We do this *after* the call
        # to object_detail(), not before it, so that this won't be called
        # unless the Author actually exists. (If the author doesn't exist,
        # object_detail() will raise Http404, and we won't reach this point.)
    now = datetime.datetime.now()
    models.Pictures.objects.filter(id=tour_id).update(last_accessed=now)
    return response

class ListTodoVilla(generics.ListCreateAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla

# @api_view(['GET'])
@permission_classes([AllowAny, ])
class DetailTodoRestVilla(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Villa.objects.all()
    serializer_class = serializers.TodoSerializerVilla

class ListTodoVillaCat(generics.ListCreateAPIView):
    queryset = models.villaCategory.objects.all()
    serializer_class = serializers.TodoSerializerVillaCategories

class DetailTodoRestVillaCat(generics.RetrieveAPIView):
    queryset = models.villaCategory.objects.all()
    serializer_class = serializers.TodoSerializerVillaCategories

class ListTodoVillaDateStatus(generics.ListCreateAPIView):
    queryset = models.villaDateStatus.objects.all()
    serializer_class = serializers.TodoSerializerVillaDateStatus

class DetailTodoRestVillaDateStatus(generics.RetrieveAPIView):
    queryset = models.villaDateStatus.objects.all()
    serializer_class = serializers.TodoSerializerVillaDateStatus

class ListTodoVillaVotes(generics.ListCreateAPIView):
    queryset = models.villaVote.objects.all()
    serializer_class = serializers.TodoSerializerVillVotes


class DetailTodoRestVillaVotes(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.villaVote.objects.all()
    serializer_class = serializers.TodoSerializerVillVotes