from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework import generics
from app1.models import (Restaurant,Tour,Pictures,Villa,villaCategory,villaDateStatus,villaVote,customer)

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
    # villaDateStatus = serializers.StringRelatedField(many=True)
    class Meta:
        model = Villa
        # fields = ('id', )
        fields = '__all__'
        # fields = ('id','title','villaCategory','address','photo','comment','pub_date','galaryPictures','serchArea','minPrice','maxPrice','avgPrice',)

class TodoSerializerVillaCategories(serializers.ModelSerializer):
    class Meta:
        model = villaCategory
        fields = '__all__'

class TodoSerializerVillaDateStatus(serializers.ModelSerializer):
    class Meta:
        model = villaDateStatus
        fields = '__all__'

class TodoSerializerVillVotes(serializers.ModelSerializer):
    class Meta:
        model = villaVote
        fields = '__all__'
class serializerCostumer(serializers.ModelSerializer):
    class Meta:
        model = customer
        fields = '__all__'