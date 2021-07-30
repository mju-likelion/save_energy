from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Community
# from django.views.generic import ListView, DetailView
# from django.views.generic.dates import ArchiveIndexView, DateDetailView, DayArchiveView, MonthArchiveView, TodayArchiveView, YearArchiveView

# from django_.myproject.account import models

# 회원가입
def signup(request):
  # signup 으로 POST 요청이 왔을 때, 새로운 유저를 만드는 절차를 밟는다.
  if request.method == 'POST':
    # password와 confirm에 입력된 값이 같다면
    if request.POST['password1'] == request.POST['password2']:
      # user 객체를 새로 생성
      user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'], email = request.POST['id'])
      # 로그인 한다
      auth.login(request, user)
      return redirect('/')
      # signup으로 GET 요청이 왔을 때, 회원가입 화면을 띄워준다.
  return render(request, 'signup.html')


def login(request):
  # login으로 POST 요청이 들어왔을 때, 로그인 절차를 밟는다.
  if request.method == 'POST':
    # login.html에서 넘어온 username과 password를 각 변수에 저장한다.
    username = request.POST['username']
    password = request.POST['password']

    # 해당 username과 password와 일치하는 user 객체를 가져온다.
    user = auth.authenticate(request, username=username, password=password)
      
    # 해당 user 객체가 존재한다면
    if user is not None:
      # 로그인 한다
      auth.login(request, user)
      return redirect('/')
    # 존재하지 않는다면
    else:
      # 딕셔너리에 에러메세지를 전달하고 다시 login.html 화면으로 돌아간다.
      return render(request, 'login.html', {'error' : 'username or password is incorrect.'})
    # login으로 GET 요청이 들어왔을때, 로그인 화면을 띄워준다.
  else:
    return render(request, 'login.html')

# 로그 아웃
def logout(request):
  # logout으로 POST 요청이 들어왔을 때, 로그아웃 절차를 밟는다.
  auth.logout(request)
  return redirect('/')
# logout으로 GET 요청이 들어왔을 때, 로그인 화면을 띄워준다.

# 커뮤니티
def community(request):
  communitys = Community.objects   # query set
  return render(request, 'community.html', {'communitys' : communitys})

# 글쓰기
def write(request) :
  if request.method == 'POST':
    # # User 객체를 생성
    # User = auth.get_user_model()
    # # User 객체를 통해 이름이 'save_energy' 인 User 객체를 불러와 'author' 변수에 할당
    # author = User.objects.get(username='도비')
    author = request.POST['user']
    title = request.POST['title']
    body = request.POST['body']
    post = Community.objects.create(
      # Post 객체의 author 필드에 'author' 변수 할당
      author=author,
      title=title,
      body=body,
    )
    # save 메서드 호출
    post.save()
    return HttpResponseRedirect(reverse('community'))

  elif request.method == 'GET':
    return render(request, 'community_write.html')

# 포스팅 세부
def detail(request, pk) :
  details = get_object_or_404(Community, pk=pk)
  return render(request, 'community_detail.html', {'details' : details})

# 포스팅 지우기
def post_delete(request, pk):
  if request.method == 'POST':
    post = Community.objects.get(pk=pk)
    post.delete()
    return render(request, 'post_delete.html')

  elif request.method == 'GET':
    return HttpResponse('잘못된 접근 입니다.')

def home(request):
  homes = Community.objects
  return render(request, 'home.html', {'homes' : homes})


# 마이페이지
def mypage(request):
  context = {
    'user': request.user
  }
  return render(request, 'mypage.html', context)
  # if request.user.is_authenticated: 
  # #로그인 한 상태라면 mypage.html로 보내기.
  #   return render(request, 'mypage.html')
  # else:
  #   return render(request, 'login.html')

def chart(request):
  if request.user.is_authenticated: 
  #로그인 한 상태라면 mypage.html로 보내기.
    return render(request, 'chart.html')
  else:
    return render(request, 'login.html')