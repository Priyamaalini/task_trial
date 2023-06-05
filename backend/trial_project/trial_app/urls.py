from django.urls import path
from .views import UserViewSet, SurveyViewSet

# urlpatterns = [
#     path('users/', UserViewSet.as_view(), name='user-detail'),
#     path('surveys/',SurveyViewSet.as_view(), name='survey-detail'),
# ]

urlpatterns = [
    path('users/', UserViewSet.as_view(actions={'get': 'list', 'post': 'create'}), name='user-list'),
    path('users/<int:pk>/', UserViewSet.as_view(actions={'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='user-detail'),
    path('surveys/', SurveyViewSet.as_view(actions={'get': 'list', 'post': 'create'}), name='survey-list'),
    path('surveys/<int:pk>/', SurveyViewSet.as_view(actions={'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='survey-detail'),
]