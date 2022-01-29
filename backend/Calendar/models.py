from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from accounts.models import User

class Contacts(models.Model):

    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    phoneno = PhoneNumberField()


class Events(models.Model):

    name = models.CharField(max_length=100)
    date = models.DateField()
    contacts = models.ManyToManyField("Contacts", related_name="events")
    message = models.CharField(max_length=500)

