from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, SurveyViewSet, QuestionViewSet, OptionViewSet, AnswerViewSet

router = DefaultRouter()
router.register(r'userprofiles', UserProfileViewSet)
router.register(r'surveys', SurveyViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'options', OptionViewSet)
router.register(r'answers', AnswerViewSet)

urlpatterns = [
    # Other URL patterns...
    path('', include(router.urls)),
]
