from django.contrib import admin
from .models import MarketplaceItem
# Register your models here.
class MarketplaceAdmin(admin.ModelAdmin):
    list_display = ['item_id','item_name','min_enhance','max_enhance',
                    'base_price','in_stock','total_trades','min_price_list',
                    'max_price_list','last_sale_price','last_sale_time','item_type','grade']

    search_fields = ['item_id','item_name','item_type']

admin.site.register(MarketplaceItem,MarketplaceAdmin)