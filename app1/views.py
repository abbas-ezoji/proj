from django.shortcuts import render
from django.http import HttpResponse
from .models import (Restaurant,Tour,Hotel,Villa,villaCategory)
from django.http import JsonResponse
from .serializers import RestaurantSerializer
from django.views.decorators.csrf import csrf_exempt

def index(request):
    tour_list = Tour.objects.order_by('-id')
    rest_list = Restaurant.objects.order_by('-id')
    hotel_list = Hotel.objects.order_by('-id')
    villa_list = Villa.objects.order_by('-id')
    context = {'tour_list': tour_list,
               'rest_list': rest_list,
               'hotel_list': hotel_list,
               'villa_list': villa_list
               }
    return render(request, 'travel.amp.html', context)

def travel(request):
    return render(request, 'travel.amp.html')

# Restframework
@csrf_exempt
def get_rest_list(request):
    """
    List all restaurants
    """
    rest_list = Restaurant.objects.order_by('-pub_date')
    serializer = RestaurantSerializer(rest_list, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_tour_list(request):
    """
    List all restaurants
    """
    tour_list = Restaurant.objects.order_by('-pub_date')
    serializer = RestaurantSerializer(tour_list, many=True)
    return JsonResponse(serializer.data, safe=False)

def villa(request):
    villaCat_list = villaCategory.objects.order_by('-id')
    villaSpacesFilter = 12
    context = {'villaCat_list':villaCat_list,'villaSpacesFilter':villaSpacesFilter}
    return render(request, 'villa_new.html', context)
