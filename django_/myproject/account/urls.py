from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('mypage/', views.mypage, name='mypage'),
    path('chart/', views.chart, name='chart'),
    path('community/', views.community, name='community'),
    path('community/<int:pk>', views.detail, name='detail'),
    # path('community/(?P<pk>\d+)/delete/$', views.post_delete, name='post_delete'),
    path('write/', views.write, name='write'),
    path('home/', views.home, name='home'),
    path('create/',views.create, name='create'),

    # path('archive/', views.PostAV.as_view(), name='community_archive'),
    # path('archive/<int:year>/', views.PostYAV.as_view(), name='community_year_archive'),
    # path('archive/<int:year>/<str:month>/', views.PostMAV.as_view(), name='community_month_archive'),
    # path('archive/<int:year>/<str:month>/<int:day>/', views.PostDAV.as_view(), name='community_day_archive'),
    # path('archive/today/', views.PostTAV.as_view(), name='community_today'),
]
