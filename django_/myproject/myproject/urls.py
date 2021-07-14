from django.contrib import admin
from django.urls import path
import myapp.views
import account.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', myapp.views.home, name="home"),
    path('community/', myapp.views.community, name="community"),
    path('introduce/', myapp.views.introduce, name="introduce"),
    path('support/', myapp.views.support, name="support"),

    path('login/', account.views.login, name='login'),
    path('signup/', account.views.signup, name='signup'),
    path('logout/', account.views.logout, name='logout'),
    # path('account/', include('account.urls')),
]
