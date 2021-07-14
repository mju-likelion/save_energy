from django.shortcuts import render
from .models import Community
# Create your views here.

def home(request):
  return render(request, 'home.html')

def introduce(request):
  return render(request, 'introduce.html')

# link community page
def community(request):
  communitys = Community.objects   # query set
  return render(request, 'community.html', {'communitys' : communitys})

def support(request):
  return render(request, 'support.html')
