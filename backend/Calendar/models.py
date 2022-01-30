from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from accounts.models import User

class Contacts(models.Model):

    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    phoneno = models.CharField(max_length=10)


class Events(models.Model):

    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    date = models.DateField()
    contacts = models.ManyToManyField("Contacts", related_name="events")
    message = models.CharField(max_length=500)

class Button(models.Model):

    status = models.BooleanField(default=False)