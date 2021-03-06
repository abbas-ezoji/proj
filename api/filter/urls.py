from django.urls import path
from django.conf.urls import include

from . import views

urlpatterns = [
   path('villa/', views.villaListView),
   path('villadatestatus/', views.ListTodoVillaSatusDate.as_view()),
   path('villavotes/', views.ListTodoVillaVotes.as_view()),
   path('villagalarypictures/', views.getPictureGalaryByVillaID.as_view()),
]
