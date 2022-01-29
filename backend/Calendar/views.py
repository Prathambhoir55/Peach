from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import viewsets

@api_view(['POST'])
def post_contacts(request):
    data = request.data
    serialized = ContactsSerializer(data = data)
    if not serialized.is_valid():
        return Response({'status':403,'message': "Enter valid number"})
    serialized.save()
    return Response({'status':200, 'payload': serialized.data,'message': "Data entered"})

@api_view(['GET'])
def get_contacts(request):
    contacts_objs =Contacts.objects.all()
    serialized = ContactsSerializer(contacts_objs, many=True)
    return Response({'status':200, 'payload': serialized.data, 'message': "Contact information has been displayed"})

class EventsView(viewsets.ModelViewSet):
	queryset = Events.objects.all()
	serializer_class = EventsSerializer
