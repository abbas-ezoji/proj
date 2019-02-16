"""proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from django.conf import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rest_framework_jwt.views import obtain_jwt_token

admin.site.site_header = "سمت ما"
admin.site.site_title = "قسمت مدیریت کارمند"
admin.site.index_title = "به بخش مدیریت کارمندان خوش آمدید"
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    url(r'^',include('app1.urls')),
    url(r'^api/', include('api.urls')),
    url(r'^api-token-auth/', obtain_jwt_token),
    ]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

