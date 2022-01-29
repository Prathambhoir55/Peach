# Generated by Django 4.0.1 on 2022-01-29 06:45

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_remove_user_is_client_remove_user_is_vendor'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_no',
            field=phonenumber_field.modelfields.PhoneNumberField(default='+919920915909', max_length=128, region=None),
            preserve_default=False,
        ),
    ]
