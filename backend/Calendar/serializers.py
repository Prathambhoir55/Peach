from rest_framework import serializers
from .models import *

class ContactsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contacts
        fields = '__all__'
        


class EventsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Events
        fields = '__all__'