from django.urls import include, path
from rest_framework import routers
from .views import UserProfileViewSet, SurveyViewSet, QuestionViewSet, OptionViewSet

router = routers.DefaultRouter()
router.register('userprofiles', UserProfileViewSet)
router.register('surveys', SurveyViewSet)
router.register('questions', QuestionViewSet)
router.register('options', OptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]











# from django.urls import path
# # from rest_framework.routers import DefaultRouter
# from .views import UserProfileViewSet, SurveyDataViewSet, MarksViewSet,  CountViewSet

# # urlpatterns = [
# #     path('users/', UserViewSet.as_view(), name='user-detail'),
# #     path('surveys/',SurveyViewSet.as_view(), name='survey-detail'),
# # ]

# # urlpatterns = [
# #     path('users/', UserViewSet.as_view(actions={'get': 'list', 'post': 'create'}), name='user-list'),
# #     path('users/<int:pk>/', UserViewSet.as_view(actions={'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='user-detail'),
# #     path('surveys/', SurveyViewSet.as_view(actions={'get': 'list', 'post': 'create'}), name='survey-list'),
# #     path('surveys/<int:pk>/', SurveyViewSet.as_view(actions={'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='survey-detail'),
# # ]

# urlpatterns = [
#     path('users/', UserProfileViewSet.as_view({'get': 'list', 'post': 'create'})),
#     path('surveys/', SurveyDataViewSet.as_view({'get': 'list', 'post': 'create'})),
#     path('marks/', MarksViewSet.as_view({'get': 'list', 'post': 'create'})),
#     path('count/', CountViewSet.as_view({'get': 'list', 'post': 'create'})),

# ]
# # router = DefaultRouter()
# # router.register(r'users', UserViewSet, basename='user')
# # router.register(r'surveys', SurveyViewSet, basename='survey')

# # urlpatterns = [
# #     path('api/', include(router.urls)),
# # ]


