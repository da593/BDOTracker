from django.shortcuts import render
from .models import CookingItem

from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import JsonResponse
from datetime import datetime

# Create your views here.


def getHomePage(request):
    return render(request,'index.html')

def getPearlMarketPage(request):
    return render(request,'pearlmarket.html')


def getCookingPage(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        queryset = CookingItem.objects.filter(item_type="cooking").values('item_name','base_price','in_stock','profession_level','quantity','grade')
        serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
        data = json.loads(serializer)
        return JsonResponse({"lastUpdate":datetime.now().timestamp(),'data':data})
    else:
        queryset = CookingItem.objects.filter(item_type="cooking").values('item_name','base_price','in_stock','profession_level','quantity','grade')
        serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
        data = json.loads(serializer)
        return render(request,'cooking.html',{'data':data})

def getAlchemyPage(request):
    return render(request,'alchemy.html')

def getFarmingPage(request):
    
    return render(request,'farming.html')

