from django.urls import path
from . import views


urlpatterns = [
    path('', views.BaseView.as_view(),name='home'),
    path('home', views.BaseView.as_view(),name='home'),
    path('pearlmarket', views.PearlView.as_view(), name='pearlmarket'),
    path('cooking', views.CookingView.as_view(), name='cooking'),
    path('alchemy', views.AlchemyView.as_view(), name='alchemy'),
    path('farming', views.FarmingView.as_view(), name='farming'),
    path('fruit',views.FruitView.as_view(), name='fruit')
]