from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import MarketplaceItem


# Create your views here.


def getHomePage(request):
    return render(request,'index.html')

def getPearlMarketPage(request):
    return render(request,'pearlmarket.html')

def getCookingPage(request):
    return render(request,'cooking.html')

def getAlchemyPage(request):
    return render(request,'alchemy.html')

def getFarmingPage(request):
    
    return render(request,'farming.html')


