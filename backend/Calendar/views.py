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
        queryset = User.objects.filter(owner = self.request.user) 
        return queryset
         
    def perform_create(self,serializer):
        serializer.save(owner = self.request.user)
        phone_list = []
        for item in self.request.data['contacts']:
            contact = Contacts.objects.get(id=item)
            phone_list.append(contact.phoneno)
        run(self.request.data['date'],phone_list,self.request.data['message'])

    
        
    # def perform_create(self,serializer):
    #     serializer.save()
    #     phone_list = []
    #     for item in serializer.data['contacts']:
    #         contact = Contacts.objects.get(id=item)
    #         phone_list.append(contact.phoneno)
    #     check_date(serializer.data['date'],phone_list,serializer.data['message'])
        