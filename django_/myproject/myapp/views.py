from django.contrib import auth
from django.http.response import HttpResponse, HttpResponseRedirect
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

# def write(request, community_id) :
#   writes = get_object_or_404(Community, pk=community_id)
#   return render(request, 'community_write.html', {'writes' : writes})

# 글쓰기 얘말고
def write(request) :
  if request.method == 'POST':
    # User 객체를 생성
    # User = auth.get_user_model()
    # User 객체를 통해 이름이 'save_energy' 인 User 객체를 불러와 'author' 변수에 할당
    # author = User.objects.get(username='save_energy')
    author = request.user
    title = request.POST['title']
    body = request.POST['body']
    post = Community.objects.create(
      # Post 객체의 author 필드에 'author' 변수 할당
      author=author,
      title=title,
      body=body,
    )
    post.publish()
    return HttpResponse('POST method')

  # GET 방식
  else:
    return render(request, 'community.html')

def support(request):
  return render(request, 'support.html')
