from django.db import models
from django.contrib.auth.models import User
import jdatetime
from datetime import timedelta,date
from django.core.validators import MaxValueValidator, MinValueValidator
from djmoney.models.fields import MoneyField
from django.db.models import Avg,Max,Min
from argparse import Namespace
#from django_jalali.db import models as jmodels


class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    menu = models.TextField(null=True, blank=True)
    tags = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'رستوران'

class Hotel(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    services = models.TextField(null=True, blank=True)
    tags = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'هتل'


class Pictures(models.Model):
    title = models.CharField(max_length=200)
    address = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'عکس'

class Tour(models.Model):
    title = models.CharField(max_length=200)
    DistAddress = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    Comment = models.TextField(null=True, blank=True)
    tags = models.CharField(max_length=200)
    DepartureDate = models.DateTimeField()
    ReturnDate = models.DateTimeField()
    pub_date = models.DateTimeField(auto_now_add=True)
    registeredUsers = models.ManyToManyField(User)
    galaryPictures = models.ManyToManyField(Pictures,null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'تور'

class villaCategory(models.Model):
    title = models.CharField(max_length=200)
    tags = models.CharField(max_length=1000)
    comment = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'دسته بندی ویلا'

class Villa(models.Model):
    title = models.CharField(max_length=200)
    villaCategory = models.ForeignKey(villaCategory,on_delete=models.CASCADE,null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    photo = models.ImageField(upload_to="app1/photos/", null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    galaryPictures = models.ManyToManyField(Pictures,null=True, blank=True)
    serchArea = models.CharField(max_length=600,null=True, blank=True)
    minPrice = models.FloatField(null=True, blank=True,default = 0)
    maxPrice = models.FloatField(null=True, blank=True,default = 0)
    avgPrice = models.FloatField(null=True, blank=True,default = 0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'ویلا'
        ordering = ('-pub_date',)

class villaVote(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    villa = models.ForeignKey(Villa,on_delete=models.CASCADE,null=True, blank=True)
    comment = models.TextField('توضیحات',null=True, blank=True)
    rate = models.IntegerField('نمره',default=0,validators=[MaxValueValidator(5), MinValueValidator(-5)],null=True, blank=True)
    category = models.IntegerField('دسته',default=0,validators=[MaxValueValidator(1), MinValueValidator(-1)],null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    ownerTitle = models.CharField(max_length=100,null=True, blank=True)

    def __str__(self):
        return  ' ویلا: ' + self.villa.title + ' تاریخ: ' + str(jdatetime.date.fromgregorian(date=self.pub_date)) + ' توسط: ' + self.owner.first_name + ' ' + self.owner.last_name
    def save(self, *args, **kwargs):
        if not self.id:
            super().save(*args, **kwargs)
        self.ownerTitle = self.owner.first_name + ' ' + self.owner.last_name
        super(villaVote, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'نظرات ویلا'

STATUS_CHOICES = (
    (0, ("آزاد")),
    (1, ("اجاره شده")),
    (2, ("رزرو شده")),
    (3, ("دردست تعمیر")),
    (4, ("اجاره داده نمی شود"))
)

ACTIVE_CHOISES = (
    (0, ("غیرفعال")),
    (1, ("فعال"))
)

class villaDateStatus(models.Model):
    villaId = models.ForeignKey(Villa,on_delete=models.CASCADE,null=True, blank=True)
    statusId = models.IntegerField(default=0,choices= STATUS_CHOICES)
    date = models.DateField()
    jdateYear = models.IntegerField(null=True, blank=True)
    jdateMonth = models.IntegerField(null=True, blank=True)
    jdateDay = models.IntegerField(null=True, blank=True)
    jdateWeekDay = models.CharField(max_length=20,null=True, blank=True)
    price = MoneyField(max_digits=14, decimal_places=0,default_currency = 'IRR' )

    class Meta:
        ordering = ('villaId','date',)

class villaStatus(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    villa = models.ForeignKey(Villa,on_delete=models.CASCADE,null=True, blank=True)
    comment = models.TextField('توضیحات',null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    j_fromDateYear = models.IntegerField('از سال ',default=1397,validators=[MaxValueValidator(1400), MinValueValidator(1397)])
    j_fromDateMonth = models.IntegerField('از ماه ',default=1,validators=[MaxValueValidator(12), MinValueValidator(1)])
    j_fromDateDay = models.IntegerField('از روز ',default=1,validators=[MaxValueValidator(31), MinValueValidator(1)])
    j_toDateYear = models.IntegerField('تا سال ',default=1397,validators=[MaxValueValidator(1400), MinValueValidator(1397)])
    j_toDateMonth = models.IntegerField('تا ماه ',default=10,validators=[MaxValueValidator(12), MinValueValidator(1)])
    j_toDateDay = models.IntegerField('تا روز ',default=1,validators=[MaxValueValidator(31), MinValueValidator(1)])
    STATUS_OF_VILLA = models.IntegerField('وضعیت',default=0,choices= STATUS_CHOICES)
    price = MoneyField('قیمت',max_digits=14, decimal_places=0,default_currency = 'IRR' )
    fromDate = models.DateTimeField(null=True, blank=True)
    toDate = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            super().save(*args, **kwargs)
        self.fromDate = jdatetime.date(self.j_fromDateYear,self.j_fromDateMonth, self.j_fromDateDay).togregorian()
        self.toDate = jdatetime.date(self.j_toDateYear,self.j_toDateMonth, self.j_toDateDay).togregorian()

        single_date = self.fromDate
        count = 1
        allPrice = 0
        for n in range(int((self.toDate - self.fromDate).days + 2)):
            jdate = jdatetime.date.fromgregorian(date=single_date)
            jdate_year = jdate.year
            jdate_month = jdate.month
            jdate_day = jdate.day
            jdate_weekday_int = jdate.weekday()
            if jdate_weekday_int == 4:
                jdate_weekday = 'چهارشنبه'
            elif jdate_weekday_int == 5:
                jdate_weekday = 'پنجشنبه'
            elif jdate_weekday_int == 6:
                jdate_weekday = 'جمعه'
            elif jdate_weekday_int == 0:
                jdate_weekday = 'شنبه'
            elif jdate_weekday_int == 1:
                jdate_weekday = 'یکشنبه'
            elif jdate_weekday_int == 2:
                jdate_weekday = 'دوشنبه'
            elif jdate_weekday_int == 3:
                jdate_weekday = 'سه شنبه'
            OBJvillaDateStatus, created = villaDateStatus.objects.get_or_create( villaId = self.villa,date = single_date)
            villaDateStatus.objects.filter(villaId = self.villa,date = single_date).update(statusId = self.STATUS_OF_VILLA
                                                                                            ,jdateYear = jdate_year
                                                                                            ,jdateMonth = jdate_month
                                                                                            ,jdateDay = jdate_day
                                                                                            ,jdateWeekDay = jdate_weekday
                                                                                            ,price = self.price,)
            single_date = self.fromDate + timedelta(n)
            count = count + 1
            allPrice = allPrice + self.price
        today = date.today()
        priceDic = villaDateStatus.objects.filter(villaId = self.villa,date__gte=today).aggregate(Avg('price'),Min('price'),Max('price'))
        price = Namespace(**priceDic)
        avg = price.price__avg - (price.price__avg % 10000 )
        msg = str(price.price__avg)+'/'+str(price.price__avg % 10000 )+'/'+str(avg)+'\n'
        # with open('E:/logs.txt','a') as log:
        #     log.write(msg)
        Villa.objects.filter(villastatus__id=self.id).update(avgPrice =avg,minPrice = price.price__min,maxPrice = price.price__max)

        super(villaStatus, self).save(*args, **kwargs)

    def __str__(self):
        return self.villa.title + ' - از: ' + str(jdatetime.date.fromgregorian(date=self.fromDate)) + ' تا: ' + str(jdatetime.date.fromgregorian(date=self.toDate)) +' : '+ str( self.STATUS_OF_VILLA)

    class Meta:
        verbose_name = 'وضعیت ویلا'

class costumer(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    address = models.TextField(null = True,blank = True)
    phonenumber = models.CharField(max_length=20,null = True,blank = True)
    firstname = models.CharField(max_length=100,null = True,blank = True)
    lastname = models.CharField(max_length=100, null=True, blank=True)
    active = models.IntegerField(default=1,choices= ACTIVE_CHOISES)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'مشتری'





