from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from djoser.serializers import UserSerializer as BaseUserSerializer
from .models import CustomUser


class UserCreateSerializer(BaseUserCreateSerializer):
  class Meta:
    model = CustomUser
    fields = ("id","email", "password", "first_name", "last_name","date_joined")


class UserSerializer(BaseUserSerializer):
  class Meta:
    model = CustomUser
    fields = ('id', 'email', 'first_name', 'last_name', 'date_joined')


