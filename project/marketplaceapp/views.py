from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder
from datetime import datetime
from .serializers import *
from .models import *
from django.http import HttpResponseRedirect,HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
# Set the post requests for all views
class BaseView(APIView):
    permission_classes = (IsAuthenticated,) 
    def __init__(self):
        
        self.model = None
        self.serializer_class = None

    # return a list of dictionaries of the item as data to user on request
    def get(self,request):
        if (self.model == None):
            return Response(None)
        else:
            queryset = self.model.objects.all()
            serializer =self.serializer_class(queryset,many=True)
            return Response(serializer.data)

    # Add feedback from user to feedback database on PO
    def post(self,request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   

class PearlView(BaseView):
    def __init__(self):
        self.model = PearlItem
        self.serializer_class = PearlSerializer

class CookingView(BaseView):
    def __init__(self):
        self.model = CookingItem
        self.serializer_class = CookingSerializer

class AlchemyView(BaseView):
    def __init__(self):
        self.model = AlchemyItem
        self.serializer_class = AlchemySerializer

class FarmingView(BaseView):
    def __init__(self):
        self.model = FarmingItem
        self.serializer_class = FarmingSerializer

class FruitView(BaseView):
    def __init__(self):
        self.model = FruitItem
        self.serializer_class = FruitSerializer 
    





        