from django.db import models
# from django.contrib.auth.models import User


class UserProfile(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255, default=None)
    password = models.CharField(max_length=255, default=None)
    email = models.EmailField(max_length=255, default=None)

    def __str__(self):
        return self.username


class Survey(models.Model):
    title = models.CharField(max_length=255)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)


class Question(models.Model):
    survey = models.ForeignKey(Survey, related_name='questions', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)


class Option(models.Model):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    option = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    def __str__(self):
        return f"Answer - Question: {self.question}, Option: {self.option}, User: {self.user}"
