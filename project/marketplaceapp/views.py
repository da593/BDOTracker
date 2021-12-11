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
        self.fruit = FruitItem
        self.fruitSerializer_class = FruitSerializer
    
    # Override get method to include two models that need to be serialize
    def get(self,request):
            queryset = self.model.objects.all()
            farming_serializer = self.serializer_class(queryset,many=True)
            fruit_serializer = self.fruitSerializer_class(queryset,many=True)
            data = farming_serializer.data + fruit_serializer.data
            return Response(data)

def getFarmingPage(request):
    crop = FarmingItem.objects.values('item_name','base_price','in_stock','grade','perfect_growth_minutes','fertilizer_growth_minutes','slots','seed_price','fruit')
    serializer = json.dumps(list(crop),cls=DjangoJSONEncoder)
    crops = json.loads(serializer)

    fruit = FruitItem.objects.values('item_name','base_price')
    serializer = json.dumps(list(fruit),cls=DjangoJSONEncoder)
    fruits = json.loads(serializer)

    fodder = FruitItem.objects.filter(item_type="farming").values("item_name","base_price")
    serializer = json.dumps(list(fodder),cls=DjangoJSONEncoder)
    fodders = json.loads(serializer)
    
    bsp = FruitItem.objects.filter(item_name="Black Stone Powder").values("item_name","base_price")
    serializer = json.dumps(list(bsp),cls=DjangoJSONEncoder)
    bsps = json.loads(serializer)
    if (request.method == "POST"):
        feedbackForm = FeedbackForm()
        feedback_data = json.load(request)['post_data']
        feedbackForm.feedback_type = feedback_data['type']
        feedbackForm.feedback = feedback_data['feedback']
        feedbackForm.save()
        return HttpResponse()
    elif request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({'crop':crops,'fruit':fruits,"stonetail":fodders,"bsp":bsps})

    else:
        return render(request,'farming.html',{'crop':crops,'fruit':fruits,"stonetail":fodders,"bsp":bsps})




        