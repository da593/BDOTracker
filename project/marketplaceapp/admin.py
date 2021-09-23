from django.contrib import admin
from .models import *
# Register your models here.
class MarketplaceAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock','total_trades','min_price_list',
                    'max_price_list','last_sale_price','last_sale_time','item_type','grade']

    search_fields = ['item_id','item_name','item_type']

class CookingAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock','total_trades','min_price_list',
                    'max_price_list','last_sale_price','last_sale_time','item_type','grade','profession_level','quantity']

    search_fields = ['item_name','in_stock','profession_level','quantity']

class AlchemyAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock','total_trades','min_price_list',
                    'max_price_list','last_sale_price','last_sale_time','item_type','grade','profession_level','quantity']

    search_fields = ['item_name','in_stock','profession_level','quantity']

class FarmingAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock',
                    'item_type','grade','fruit','perfect_growth_minutes','fertilizer_growth_minutes','slots','seed_price']

    search_fields = ['item_name','in_stock']

class FruitAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock','total_trades','min_price_list',
                    'max_price_list','last_sale_price','last_sale_time','item_type','grade']

    search_fields = ['item_name','in_stock']

class PearlAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','base_price','in_stock','total_trades',
                    'hourly_sale','daily_sale','weekly_sale','monthly_sale','item_type','grade']

    search_fields = ['item_name','item_type']

admin.site.register(MarketplaceItem,MarketplaceAdmin)
admin.site.register(CookingItem,CookingAdmin)
admin.site.register(AlchemyItem,AlchemyAdmin)
admin.site.register(FarmingItem,FarmingAdmin)
admin.site.register(FruitItem,FruitAdmin)
admin.site.register(PearlItem,PearlAdmin)