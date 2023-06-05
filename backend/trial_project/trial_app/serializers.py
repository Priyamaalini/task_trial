from rest_framework import serializers
from .models import User, Survey

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ['id', 'user', 'title', 'question', 'option', 'score', 'marks']
