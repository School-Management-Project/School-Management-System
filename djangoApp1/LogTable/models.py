from django.db import models
from datetime import datetime    


class LogTable(models.Model):
    id = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=100)
    userType = models.CharField(max_length=1)
    urlFormat = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    Data = models.CharField(max_length=200)
    updatedData = models.CharField(max_length=200,blank=True)