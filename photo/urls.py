from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('ggggg', views.upload_photo, name='upload_photo'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
