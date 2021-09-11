from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import MarketplaceItem
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
import json
# Create your views here.


def getHomePage(request):
    return render(request,'index.html')

def getPearlMarketPage(request):
    return render(request,'pearlmarket.html')

def getCookingPage(request):
    queryset = MarketplaceItem.objects.filter(item_type="cooking").values('item_name','base_price','in_stock')
    serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
    data = json.loads(serializer)
    return render(request,'cooking.html',{'data':data})

def getAlchemyPage(request):
    return render(request,'alchemy.html')

def getFarmingPage(request):
    
    return render(request,'farming.html')


