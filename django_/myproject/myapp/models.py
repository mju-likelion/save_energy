from django.db import models

# Create your models here.
class Community(models.Model) :
  title = models.CharField(max_length=200) # 제목을 가져온다
  date = models.DateTimeField('date published') # 날짜를 가져온다
  body = models.TextField() # 본문 내용을 가져온다
  # 작성자도 가져와야하지 않을까