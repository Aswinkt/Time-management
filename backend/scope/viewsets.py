from rest_framework import viewsets
from .models import Task, User
from .serializers import TaskSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class TaskViewsets(viewsets.ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer



class UserViewsets(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated)