import requests
import schedule
import time
from django.utils.timezone import datetime
# from datetime import datetime
from threading import Timer
from .models import Contacts
import environ

env = environ.Env()
environ.Env.read_env()

def contact_num(event):
    phone_list = []
    print(event.contacts)
    for item in event.contacts.iterator():
        contact = Contacts.objects.get(id=item.id)
        phone_list.append(contact.phoneno)
    return phone_list

    
def sms(number_list,msg):
    for number in number_list:
        url = "https://www.fast2sms.com/dev/bulk"
        payload = f"sender_id=FSTSMS&message={msg}&language=english&route=p&numbers={number}"
        headers = {
        'authorization': env('API_KEY'),
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)


