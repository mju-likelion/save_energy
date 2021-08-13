from django.contrib.admin.decorators import register
from django.db import models
from django.db.models.fields import DateField
from django.utils import timezone
from django.urls import reverse

# Create your models here.
class Community(models.Model) :
  author = models.CharField(max_length=60, default='') # 작성자
  title = models.CharField(verbose_name='TITLE',max_length=200) # 제목을 가져온다
  date = models.DateTimeField('DATE PUBLISHED', default=timezone.now) # 날짜/시간을 가져온다
  body = models.TextField('CONTENT', default='') # 본문 내용을 가져온다
  mod_date = models.DateTimeField('MODIFY DATE', auto_now=True) # 수정 날짜/시간을 가져온다

  class Meta :
    verbose_name='community'
    verbose_name_plural='communitys'
    db_table='community_posts'
    ordering = ('-mod_date',)

  # 객체 이름을 제목으로 바꿔줌
  def __str__(self) :
      return self.title
  
  # url 패턴을 만들어준다
  def get_absolute_url(self) :
    return reverse('community:community_detail', args=(self.id,))

  def get_previous(self) :
    return self.get_previous_by_mod_date()
  
  def get_next(self) :
    return self.get_next_by_mod_date() 

class Chart(models.Model) :
  author = models.CharField(max_length=60, default='') # 작성자
  Jan = models.CharField(verbose_name='Jan',max_length=200) 
  Feb = models.CharField(verbose_name='feb',max_length=200) 
  Mar = models.CharField(verbose_name='May',max_length=200)
  Apr = models.CharField(verbose_name='Apr',max_length=200) 
  May = models.CharField(verbose_name='May',max_length=200) 
  Jun = models.CharField(verbose_name='Jun',max_length=200) 
  Jul = models.CharField(verbose_name='Jul',max_length=200) 
  Aug = models.CharField(verbose_name='Aug',max_length=200) 
  Sep = models.CharField(verbose_name='Sep',max_length=200) 
  Oct = models.CharField(verbose_name='Oct',max_length=200) 
  Nov = models.CharField(verbose_name='Nov',max_length=200) 
  Dec = models.CharField(verbose_name='Dec',max_length=200)  
  