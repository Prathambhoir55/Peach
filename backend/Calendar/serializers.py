from rest_framework import serializers
from .models import *

class ContactsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model = Contacts
        fields = '__all__'
        

class EventsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model = Events
        fields = '__all__'


class ButtonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Button
        fields = '__all__'