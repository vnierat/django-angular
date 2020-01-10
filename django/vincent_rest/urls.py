
from django.contrib import admin
from django.urls import path
from django.urls import include, path
from rest_framework import routers
from vincent_rest.api import views

router = routers.DefaultRouter()
router.register(r'VideoGames', views.VideoGameViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
