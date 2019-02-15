from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import ( Restaurant,Tour,Hotel,Pictures,Villa,villaCategory,villaStatus,villaVote,customer)
from .form import TourForm

admin.site.register(Restaurant)
admin.site.register(Tour)
admin.site.register(Hotel)
#######################################################################
@admin.register(Pictures)
class PicturesAdmin(admin.ModelAdmin):
    exclude = ['owner']  # to hide owner field
    # inlines = [Villa]
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()
    #get_queryset function to villa list display by user
    def get_queryset(self, request):
        qs = super(PicturesAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
#########################VillaAdmin####################################
@admin.register(Villa)
class VillaAdmin(admin.ModelAdmin):
    list_display = ("title", "villaCategory","latitude","longitude")
    list_filter = ("title", "villaCategory","latitude","longitude",)
    exclude = ['owner'] # to hide owner field
    list_per_page = 20
    date_hierarchy = 'pub_date'
    #save_model function to automatic save owner by user
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()
    #get_queryset function to villa list display by user
    def get_queryset(self, request):
        qs = super(VillaAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
##########################villaCategory###################################
@admin.register(villaCategory)
class villaCategoryAdmin(admin.ModelAdmin):
    list_display = ("title","tags")
##########################villaStatusAdmin###################################
class villaStatusAdmin(admin.ModelAdmin):
    exclude = ['owner']# to hide owner field
    #save_model function to automatic save owner by user
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()
    # get_queryset function to villa list display by user
    def get_queryset(self, request):
        qs = super(villaStatusAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
    #render_change_form to filter villa field filter by user owner
    def render_change_form(self, request, context, *args, **kwargs):
        context['adminform'].form.fields['villa'].queryset = Villa.objects.filter(owner=request.user)
        return super(villaStatusAdmin, self).render_change_form(request, context, *args, **kwargs)

admin.site.register(villaStatus, villaStatusAdmin)
##########################villaVote###################################
class villaVoteAdmin(admin.ModelAdmin):
    exclude = ['owner']# to hide owner field
    #save_model function to automatic save owner by user
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()
    # get_queryset function to villa list display by user
    def get_queryset(self, request):
        qs = super(villaVoteAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
    # render_change_form to filter villa field filter by user owner
    def render_change_form(self, request, context, *args, **kwargs):
        if not request.user.is_superuser:
            context['adminform'].form.fields['villa'].queryset = Villa.objects.all() #filter(owner=request.user)
        return super(villaVoteAdmin, self).render_change_form(request, context, *args, **kwargs)

admin.site.register(villaVote, villaVoteAdmin)

admin.site.register(customer)
