from rest_framework import serializers
from .models import Task, User


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

    full_name = serializers.SerializerMethodField(read_only=True)

    def get_full_name(self, data):
        return data.first_name + "" + data.last_name

    class Meta:
        model = User
        fields = ["user_id","first_name","last_name","full_name","username",
        "department","designation","type","is_superuser"]