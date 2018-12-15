from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework import generics
from app1.models import (Restaurant,Tour,Pictures,Villa,villaCategory,)

class TodoSerializerRest(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class TodoSerializerTour(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class TodoSerializerPictures(serializers.ModelSerializer):
    class Meta:
        model = Pictures
        fields = '__all__'

class TodoSerializerVilla(serializers.ModelSerializer):
    class Meta:
        model = Villa
        fields = '__all__'

class TodoSerializerVillaCategories(serializers.ModelSerializer):
    class Meta:
        model = villaCategory
        fields = '__all__'
