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


class SurveyMark(models.Model):
    username = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    marks = models.IntegerField()

    def __str__(self):
        return f"{self.username.username} - {self.survey.title}"


class SurveyCount(models.Model):
    survey = models.OneToOneField(Survey, on_delete=models.CASCADE)
    user_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.survey.title} - User Count: {self.user_count}"


class Question(models.Model):
    survey = models.ForeignKey(Survey, related_name='questions', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)


class Option(models.Model):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    option = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)













# from django.db import models
# # from django.contrib.auth.models import User
# from django.db.models import JSONField

# class UserProfile(models.Model):
#     username = models.CharField(max_length=255)
#     password = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255)

#     def __str__(self):
#         return self.username

 
# class SurveyData(models.Model):
#     user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
#     title = models.CharField(max_length=255)
#     questions = JSONField(default=list, blank=True)
#     # option = models.CharField(max_length=255)
#     # correctOption = models.CharField(max_length=255)
#     score = models.IntegerField(default=0)

# class Question(models.Model):
#     option = models.CharField(max_length=255)
#     question = models.CharField(max_length=500)
#     correctOption = models.CharField(max_length=255)

#     def __str__(self):
#         return self.question    

# class Marks(models.Model):
#     user = models.OneToOneField(UserProfile, on_delete=models.CASCADE, null=True, blank=True, default=None)
#     marks = models.IntegerField(default=0)

# class Count(models.Model):
#     user = models.OneToOneField(UserProfile, on_delete=models.CASCADE, default=None)
#     count = models.IntegerField(default=0)

    

# #      # Add score field

# # from django.db import models

# # class UserProfile(models.Model):
# #     username = models.CharField(max_length=255)
# #     password = models.CharField(max_length=255)
# #     email = models.EmailField(max_length=255)

# #     def __str__(self):
# #         return self.username


# # class SurveyData(models.Model):
# #     user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
# #     title = models.CharField(max_length=255)
# #     score = models.IntegerField(default=0)

# #     def __str__(self):
# #         return self.title


# # class Question(models.Model):
# #     survey = models.ForeignKey(SurveyData, on_delete=models.CASCADE, related_name='questions')
# #     option = models.CharField(max_length=255)
# #     question = models.CharField(max_length=500)
# #     correctOption = models.CharField(max_length=255)

# #     def __str__(self):
# #         return self.question
    

# # class Marks(models.Model):
# #     user = models.OneToOneField(UserProfile, on_delete=models.CASCADE, null=True, blank=True, default=None)
# #     marks = models.IntegerField(default=0)

# #     def __str__(self):
# #         return f"{self.user.username}'s Marks"


# # class Count(models.Model):
# #     user = models.OneToOneField(UserProfile, on_delete=models.CASCADE, default=None)
# #     count = models.IntegerField(default=0)

# #     def __str__(self):
# #         return f"{self.user.username}'s Count"
