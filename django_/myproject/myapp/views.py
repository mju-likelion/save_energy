from django.shortcuts import get_object_or_404, render
from .models import Community
# Create your views here.

def home(request):
  return render(request, 'home.html')

def introduce(request):
  return render(request, 'introduce.html')

# link community page
# def community(request):
#   communitys = Community.objects   # query set
#   return render(request, 'community.html', {'communitys' : communitys})

def community(request):
  communitys = Community.objects
  context = {
    "communitys" : communitys
  }
  return render(request, 'community.html',context=context)

def detail(request, community_id) :
  details = get_object_or_404(Community, pk=community_id)
  return render(request, 'community_detail.html', {'details' : details})

def write(request, community_id) :
  writes = get_object_or_404(Community, pk=community_id)
  return render(request, 'community_write.html', {'writes' : writes})

def support(request):
  return render(request, 'support.html')
