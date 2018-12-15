from django.forms import ModelForm
from django.forms.widgets import TextInput
from .models import Tour

class TourForm(ModelForm):
    class Meta:
        model = Tour
        fields = '__all__'
        widgets = {
            'color': TextInput(attrs={'type': 'color'}),
        }