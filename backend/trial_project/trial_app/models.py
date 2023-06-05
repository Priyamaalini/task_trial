from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)

class Survey(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE , related_name='user_survey')
    title = models.CharField(max_length=255)  # Add title field
    question = models.ForeignKey(User, on_delete=models.CASCADE , related_name='question_survey' , default='')
    option = models.CharField(max_length=255, default='')
    score = models.IntegerField(default=0) 
    marks = models.IntegerField(default=0)



     # Add score field
