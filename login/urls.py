from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import animation_complete,home


urlpatterns = [
    path('', animation_complete, name='animation_complete'),
    path('home', home, name='home'),
    # ... other patterns

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
