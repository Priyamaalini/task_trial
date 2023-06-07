from rest_framework import viewsets
from .models import UserProfile, Survey, Question, Option
from .serializers import UserProfileSerializer, SurveySerializer, QuestionSerializer, OptionSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer











# from rest_framework import viewsets
# from .models import  UserProfile,SurveyData, Marks, Count
# from .serializers import  UserProfileSerializer, SurveyDataSerializer, MarksSerializer, CountSerializer

# class  UserProfileViewSet(viewsets.ModelViewSet):
#     queryset =  UserProfile.objects.all()
#     serializer_class =  UserProfileSerializer

# class SurveyDataViewSet(viewsets.ModelViewSet):
#     queryset = SurveyData.objects.all()
#     serializer_class = SurveyDataSerializer

# class MarksViewSet(viewsets.ModelViewSet):
#     queryset = Marks.objects.all()
#     serializer_class = MarksSerializer    

# class CountViewSet(viewsets.ModelViewSet):
#     queryset = Count.objects.all()
#     serializer_class = CountSerializer


# # from rest_framework import viewsets
# # from .models import UserProfile, SurveyData, Marks, Count
# # from .serializers import UserProfileSerializer, SurveyDataSerializer, MarksSerializer, CountSerializer

# # class UserProfileViewSet(viewsets.ModelViewSet):
# #     queryset = UserProfile.objects.all()
# #     serializer_class = UserProfileSerializer

# # class SurveyDataViewSet(viewsets.ModelViewSet):
# #     queryset = SurveyData.objects.all()
# #     serializer_class = SurveyDataSerializer

# # class MarksViewSet(viewsets.ModelViewSet):
# #     queryset = Marks.objects.all()
# #     serializer_class = MarksSerializer    

# # class CountViewSet(viewsets.ModelViewSet):
# #     queryset = Count.objects.all()
# #     serializer_class = CountSerializer
