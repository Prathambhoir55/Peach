from django.urls import path
from .views import *
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', EventsView)

urlpatterns = [
    path('', include(router.urls)),
    path('get_contacts/', get_contacts),
    path('post_contacts/', post_contacts),
]