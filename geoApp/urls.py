from django.conf.urls import url
from . import views


#report.autodiscover()

urlpatterns = [
        url(r'', views.home,name='geo'),
    ]