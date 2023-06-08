from rest_framework import viewsets
from .models import UserProfile, Survey, Question, Option, SurveyMark, SurveyCount
from .serializers import UserProfileSerializer, SurveySerializer, QuestionSerializer, OptionSerializer, SurveyMarkSerializer, SurveyCountSerializer


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


class SurveyMarkViewSet(viewsets.ModelViewSet):
    queryset = SurveyMark.objects.all()
    serializer_class = SurveyMarkSerializer


class SurveyCountViewSet(viewsets.ModelViewSet):
    queryset = SurveyCount.objects.all()
    serializer_class = SurveyCountSerializer
