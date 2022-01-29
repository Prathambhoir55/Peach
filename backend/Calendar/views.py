from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import viewsets,views
from .sms import * 


@api_view(['POST'])
def post_contacts(request):
    data = request.data
    serialized = ContactsSerializer(data = data)
    if not serialized.is_valid():
        return Response({'status':403,'message': "Enter valid number"})
    serialized.save(owner = request.user)
    return Response({'status':200, 'payload': serialized.data,'message': "Data entered"})

@api_view(['GET'])
def get_contacts(request):
    contacts_objs =Contacts.objects.filter(owner = request.user)
    serialized = ContactsSerializer(contacts_objs, many=True)
    return Response({'status':200, 'payload': serialized.data, 'message': "Contact information has been displayed"})


class EventsView(viewsets.ModelViewSet):
    queryset = Events.objects.all() 
    serializer_class = EventsSerializer
    
    def get_queryset(self): 
        queryset = Events.objects.filter(owner = self.request.user) 
        return queryset
         
    def perform_create(self,serializer):
        serializer.save(owner = self.request.user)
        
        
@api_view(['POST'])
def post_status(request):
    data = request.data
    serializer = ButtonSerializer(data = data)
    today = datetime.today()
    date_today = f"{today.year}-{today.month}-{today.day}"
    if serializer.is_valid():
        for event in Events.objects.filter(date = date_today).iterator():
            print(event.contacts)
            num_list = contact_num(event)
            msg = event.message
            sms(num_list, msg) 
        return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})