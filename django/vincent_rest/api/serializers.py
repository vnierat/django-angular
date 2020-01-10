from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import VideoGame

class VideoGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoGame
        fields = ['id', 'title', 'desc', 'console', 'year']