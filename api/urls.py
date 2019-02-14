from django.urls import path
from django.conf.urls import url,include

from . import views

urlpatterns = [
    url(r'^filter/', include('api.filter.urls')),
    url(r'^account/', include('api.login.urls')),
    path('rest/', views.ListTodoRest.as_view()),
    path('rest/<int:pk>/', views.DetailTodoRest.as_view()),
    path('tour/', views.ListTodoTour.as_view()),
    path('tour/<int:pk>/', views.DetailTodoRestTour.as_view()),
    path('villacat/', views.ListTodoVillaCat.as_view()),
    path('villacat/<int:pk>/', views.DetailTodoRestVillaCat.as_view()),
    path('pictures/', views.ListTodoPictures.as_view()),
    path('pictures/<int:pk>/', views.DetailTodoRestPictures.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('villa/', views.ListTodoVilla.as_view()),
    path('villa/<int:pk>/', views.DetailTodoRestVilla.as_view()),
    path('villavotes/', views.ListTodoVillaVotes.as_view()),
    path('villavotes/<int:pk>/', views.DetailTodoRestVillaVotes.as_view()),
]