from django.urls import path
from . import views


urlpatterns = [
    path('home', views.getHomePage, name='home'),
    path('pearlmarket', views.getPearlMarketPage, name='pearlmarket'),
    path('cooking', views.getCookingPage, name='cooking'),
    path('alchemy', views.getAlchemyPage, name='alchemy'),
    path('farming', views.getFarmingPage, name='farming'),
]