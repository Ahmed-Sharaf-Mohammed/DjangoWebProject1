# captureapp/models.py
from django.db import models

class CapturedImage(models.Model):
    image = models.ImageField(upload_to='captured_images/')
    capture_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'CapturedImage-{self.id}'
