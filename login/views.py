from django.shortcuts import render, redirect
from .models import Profile
from django.http import JsonResponse

# Create your views here.
def home(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        profile = Profile.objects.create(email=email, password=password)

    return render(request, 'login/index2.html')

def animation_complete(request):
    return render(request, 'login/index.html')