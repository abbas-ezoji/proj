from django.db import models
from django.contrib.auth.models import User
#from django_jalali.db import models as jmodels


class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    menu = models.TextField()
    tags = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Hotel(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    services = models.TextField()
    tags = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Pictures(models.Model):
    title = models.CharField(max_length=200)
    address = models.TextField()
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Tour(models.Model):
    title = models.CharField(max_length=200)
    DistAddress = models.TextField()
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    Comment = models.TextField()
    tags = models.CharField(max_length=200)
    DepartureDate = models.DateTimeField()
    ReturnDate = models.DateTimeField()
    pub_date = models.DateTimeField(auto_now_add=True)
    registeredUsers = models.ManyToManyField(User)
    galaryPictures = models.ManyToManyField(Pictures)

    def __str__(self):
        return self.title

class villaCategory(models.Model):
    title = models.CharField(max_length=200)
    tags = models.CharField(max_length=1000)
    comment = models.TextField()

    def __str__(self):
        return self.title

class Villa(models.Model):
    title = models.CharField(max_length=200)
    villaCategory = models.ForeignKey(villaCategory,on_delete=models.CASCADE,null=True, blank=True)
    address = models.TextField()
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    comment = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    galaryPictures = models.ManyToManyField(Pictures)

    def __str__(self):
        return self.title

STATUS_OF_VILLA = (
        ('RENTED', 'اجاره داده شده'),
        ('RESERVED', 'رزرو شده'),
        ('FREE', 'خالی'),
        ('MAINTENANCE', 'در دست تعمیر'),
    )
class villaStatus(models.Model):
    villa = models.ForeignKey(Villa,on_delete=models.CASCADE,null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    fromDate = models.DateTimeField(null=True, blank=True)
    toDate = models.DateTimeField(null=True, blank=True)
    STATUS_OF_VILLA = models.CharField(
        max_length=100,
        choices=STATUS_OF_VILLA,
        default='FREE',
    )