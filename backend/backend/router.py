from scope.viewsets import TaskViewsets, UserViewsets
from rest_framework import routers




router = routers.DefaultRouter()
router.register('Task', TaskViewsets, basename='task-api')
router.register('User', UserViewsets, basename='user-api')

