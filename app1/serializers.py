from rest_framework import serializers
from .models import Restaurant,Tour


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'address', 'photo', 'tags', 'menu', 'pub_date')

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
