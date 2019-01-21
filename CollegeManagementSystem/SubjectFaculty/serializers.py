from rest_framework import serializers
from .models import SubjectFaculty




class SubjectFacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectFaculty
        fields = '__all__'
