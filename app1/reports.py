from .models import Restaurant
from model_report.report import reports, ReportAdmin

class RestaurantReport(ReportAdmin):
    title = _('Restaurant Report Name')
    model = Restaurant
    fields = [
        'anymodelfield',
    ]
    list_order_by = ('anymodelfield',)
    type = 'report'

reports.register('anymodel-report', Restaurant)