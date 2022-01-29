import requests
import schedule
import time
from django.utils.timezone import datetime
# from datetime import datetime
from threading import Timer

def sms(number_list,msg):
    for number in number_list:
        url = "https://www.fast2sms.com/dev/bulk"
        payload = f"sender_id=FSTSMS&message={msg}&language=english&route=p&numbers={number}"
        headers = {
        'authorization': "qzwy3IER19LQBDlJYfUWcSreN6a5hOougCTX80bVHGxZkvisdMSWQNj9K4TJq1r8AMwguLyi3sVBX2oz",
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print(response.text)

def run(entered_date,number_list,msg):

    x=datetime.today()
    y=x.replace(day=x.day+1, hour=0, minute=35, second=0, microsecond=0)
    delta_t=y-x

    secs=delta_t.seconds+1

    def check_date(entered_date,number_list,msg):
        today = datetime.today()
        date = f"{today.year}-{today.month}-{today.day}"
        if entered_date == date:
            sms(number_list,msg)

    t = Timer(secs, check_date(entered_date,number_list,msg))
    t.start()

