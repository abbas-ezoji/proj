from django.contrib import admin
from .models import ( Restaurant,Tour,Hotel,Pictures,Villa,villaCategory,villaStatus,)
from .form import TourForm

admin.site.register(Restaurant)
admin.site.register(Tour)
admin.site.register(Hotel)
admin.site.register(Pictures)
admin.site.register(Villa)
admin.site.register(villaCategory)
admin.site.register(villaStatus)

class TourAdmin(admin.ModelAdmin):
    form = TourForm
    filter_horizontal = ('questions',)
    fieldsets = (
        (None, {
            'fields': (('Title', 'DistAddress'), 'Comment', 'color')
            }),
        )