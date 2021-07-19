from django.contrib import admin
from .models import Community
# Register your models here.

admin.site.register(Community)

class CommunityAdmin(admin.ModelAdmin) :
  list_display = ('id', 'title', 'date')
  list_filter = ('date', )