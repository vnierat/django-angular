from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import VideoGameSerializer
from .models import VideoGame
from rest_framework.response import Response


class VideoGameViewSet(viewsets.ModelViewSet):
    queryset = VideoGame.objects.all()
    serializer_class = VideoGameSerializer

    def list(self, request, *args, **kwargs):
        videoGames = VideoGame.objects.all()
        serializer = VideoGameSerializer(videoGames, many=True)
        return Response(serializer.data)




