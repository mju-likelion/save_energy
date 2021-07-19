from django.db import models
from django.utils import timezone

# Create your models here.
class Community(models.Model) :
  title = models.CharField(verbose_name='TITlE', max_length=300) # 제목을 가져온다
  date = models.DateTimeField('PUBLISH DATE', default=timezone.now) # 날짜를 가져온다
  body = models.TextField('CONTENT', default='') # 본문 내용을 가져온다
  # 작성자도 가져와야하지 않을까

  def __str__(self) :
      return self.title