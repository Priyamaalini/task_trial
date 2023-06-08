from rest_framework import serializers
from .models import UserProfile, Survey, Question, Option, SurveyMark, SurveyCount

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'

class SurveyMarkSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer()
    survey = serializers.StringRelatedField()

    class Meta:
        model = SurveyMark
        fields = '__all__'

class SurveyCountSerializer(serializers.ModelSerializer):
    survey = serializers.StringRelatedField()

    class Meta:
        model = SurveyCount
        fields = '__all__'

class SurveySerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Survey
        fields = '__all__'












# from rest_framework import serializers
# from trial_app.models import  UserProfile, Question, SurveyData, Marks, Count

# class  UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model =  UserProfile
#         fields = ['id', 'username', 'password', 'email']

# class QuestionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Question
#         fields = ['id', 'option', 'question', 'correctOption']


# class SurveyDataSerializer(serializers.ModelSerializer):
#   questions = QuestionSerializer(many=True)

#   class Meta:
#         model = SurveyData
#         fields = ['id', 'user', 'title', 'questions', 'score']

# class MarksSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Marks
#         fields = ['id', 'user', 'marks']

# class CountSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Count
#         fields = ['id', 'user', 'count']            

# # from rest_framework import serializers
# # from .models import UserProfile, SurveyData, Question, Marks, Count

# # class UserProfileSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = UserProfile
# #         fields = ['id', 'username', 'password', 'email']


# # class QuestionSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Question
# #         fields = ['id', 'option', 'question', 'correctOption']


# # class SurveyDataSerializer(serializers.ModelSerializer):
# #     questions = QuestionSerializer(many=True)

# #     class Meta:
# #         model = SurveyData
# #         fields = ['id', 'user', 'title', 'questions', 'score']


# # class MarksSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Marks
# #         fields = ['id', 'user', 'marks']


# # class CountSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Count
# #         fields = ['id', 'user', 'count']

