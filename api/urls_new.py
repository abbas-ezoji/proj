from django.urls import path
from django.conf.urls import url,include

from . import views

urlpatterns = [
    path('rest/', views.ListTodoRest.as_view()),
    path('rest/<int:pk>/', views.DetailTodoRest.as_view()),
    path('tour/', views.ListTodoTour.as_view()),
    path('pictures/', views.ListTodoPictures.as_view()),
    path('pictures/<int:pk>/', views.DetailTodoRestPictures.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('villa/', views.ListTodoVilla.as_view()),
    path('villa/<int:pk>/', views.DetailTodoRestVilla.as_view()),
]