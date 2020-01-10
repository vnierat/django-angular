from django.db import models

class VideoGame(models.Model):
    title = models.CharField(max_length=32)
    desc = models.CharField(max_length=500)
    console = models.CharField(null=True, blank=True, max_length=16)
    year = models.IntegerField()