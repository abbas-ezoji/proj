from django.conf.urls import url,include
from django.urls import path
from . import views
from django.views.generic import TemplateView
#from model_report import report

#report.autodiscover()

urlpatterns = (
        url(r'^$', views.index, name='index'),
        path('tourdetails.html', TemplateView.as_view(template_name='tourdetails.html')),
        path('PersianCalander.html', TemplateView.as_view(template_name='PersianCalander.html')),
        path('villa', views.villa, name='villa'),
        # url(r'report/', include('model_report.urls')),
        #url(r'^report_builder/', include('report_builder.urls')),
        url(r'^base/$', TemplateView.as_view(template_name='base.html')),
)