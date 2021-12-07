from rest_framework import serializers
from .models import *

# Serializers: Convert data from database to JSON or vice-versa based on REST framework.

class PearlSerializer(serializers.ModelSerializer):
    class Meta:
        model = PearlItem
        fields = ('item_name','total_trades','hourly_sale','daily_sale','weekly_sale','monthly_sale','item_type','grade')

class CookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookingItem
        fields = ('item_name','base_price','in_stock','profession_level','quantity','grade')

class AlchemySerializer(serializers.ModelSerializer):
    class Meta:
        model = AlchemyItem
        fields = ('item_name','base_price','in_stock','profession_level','quantity','grade')

class FarmingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmingItem
        fields = ('item_name','base_price','in_stock','grade','perfect_growth_minutes','fertilizer_growth_minutes','slots','seed_price','fruit')

class FruitSerializer(serializers.ModelSerializer):
    class Meta:
        model = FruitItem
        fields = ('item_name','base_price')

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackForm
        fields = ('submission_id','feedback_type','feedback')
    