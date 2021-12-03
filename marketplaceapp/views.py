from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import JsonResponse
from datetime import datetime
from .models import *
from django.http import HttpResponseRedirect,HttpResponse

# Create your views here.


def getHomePage(request):
    if request.method == "POST":
        feedbackForm = FeedbackForm()
        feedback_data = json.load(request)['post_data']
        feedbackForm.feedback_type = feedback_data['type']
        feedbackForm.feedback = feedback_data['feedback']
        feedbackForm.save()
        return HttpResponse()
    else:
        return render(request,'index.html')

def getPearlMarketPage(request):
    queryset = PearlItem.objects.values('item_name','total_trades','hourly_sale','daily_sale','weekly_sale','monthly_sale','item_type','grade')
    serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
    data = json.loads(serializer)
    if (request.method == "POST"):
        feedbackForm = FeedbackForm()
        feedback_data = json.load(request)['post_data']
        feedbackForm.feedback_type = feedback_data['type']
        feedbackForm.feedback = feedback_data['feedback']
        feedbackForm.save()
        return HttpResponse()
    elif request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({'data':data})
    else:
        return render(request,'pearlmarket.html',{'data':data})
    

def getCookingPage(request):
    queryset = CookingItem.objects.values('item_name','base_price','in_stock','profession_level','quantity','grade')
    serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
    data = json.loads(serializer)
    if (request.method == "POST"):
        feedbackForm = FeedbackForm()
        feedback_data = json.load(request)['post_data']
        feedbackForm.feedback_type = feedback_data['type']
        feedbackForm.feedback = feedback_data['feedback']
        feedbackForm.save()
        return HttpResponse()
    elif request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({"lastUpdate":datetime.now().timestamp(),'data':data})
    else:
        return render(request,'cooking.html',{'data':data})

def getAlchemyPage(request):
    queryset = AlchemyItem.objects.values('item_name','base_price','in_stock','profession_level','quantity','grade')
    serializer = json.dumps(list(queryset),cls=DjangoJSONEncoder)
    data = json.loads(serializer)
    if (request.method == "POST"):
        feedbackForm = FeedbackForm()
        feedback_data = json.load(request)['post_data']
        feedbackForm.feedback_type = feedback_data['type']
        feedbackForm.feedback = feedback_data['feedback']
        feedbackForm.save()
        return HttpResponse()
    elif request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({'data':data}) 
    else:
        return render(request,'alchemy.html',{'data':data})

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




        