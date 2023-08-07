from django.db import models

# Create your models here.
class Profile(models.Model):
    email = models.EmailField(max_length=30, default='none')
    password = models.CharField(max_length=128)
    