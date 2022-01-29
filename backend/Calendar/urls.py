from django.urls import path
from .views import *
from django.conf.urls import include

urlpatterns = [
    path('get_contacts/', get_contacts),
    path('post_contacts/', post_contacts),
]