from rest_framework import serializers
from .models import LogTable


class LogTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogTable
        fields = '__all__'