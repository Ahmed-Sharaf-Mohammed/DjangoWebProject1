# photo_app/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
#from .models import CapturedPhoto

@csrf_exempt
def upload_photo(request):
    if request.method == 'POST':
        image_data = request.POST.get('photo_data')

        # Decode the base64 image data
        image_data = image_data.replace('data:image/png;base64,', '')
        image_data = image_data.replace(' ', '+')

        # Save the image to the database
        captured_photo = CapturedPhoto(image=image_data)
        captured_photo.save()

        return JsonResponse({'message': 'Photo uploaded successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})
