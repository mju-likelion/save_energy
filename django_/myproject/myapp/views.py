from django.shortcuts import render

# Create your views here.

def home(request):
  return render(request, 'home.html')

def introduce(request):
  return render(request, 'introduce.html')

def community(request):
  return render(request, 'community.html')

def support(request):
  return render(request, 'support.html')