from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import ( Restaurant,Tour,Hotel,Pictures,Villa,villaCategory,villaStatus,villaVote)
from .form import TourForm

admin.site.register(Restaurant)
admin.site.register(Tour)
admin.site.register(Hotel)
admin.site.register(Pictures)
#########################VillaAdmin####################################
class VillaAdmin(admin.ModelAdmin):
    exclude = ['owner']
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()

    def get_queryset(self, request):
        qs = super(VillaAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
admin.site.register(Villa, VillaAdmin)
##########################villaCategory###################################
admin.site.register(villaCategory)
##########################villaStatusAdmin###################################
class villaListByOwner(SimpleListFilter):
    def queryset(self, request, queryset):
        return queryset.filter(villa__owner = request.user)
class villaStatusAdmin(admin.ModelAdmin):
    exclude = ['owner']
    # list_filter = (villaListByOwner,)
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'owner', None) is None:
            obj.owner = request.user
        obj.save()

    def get_queryset(self, request):
        qs = super(villaStatusAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(owner=request.user)
admin.site.register(villaStatus, villaStatusAdmin)
##########################villaStatusAdmin###################################
admin.site.register(villaVote)

class TourAdmin(admin.ModelAdmin):
    form = TourForm
    filter_horizontal = ('questions',)
    fieldsets = (
        (None, {
            'fields': (('Title', 'DistAddress'), 'Comment', 'color')
            }),
        )