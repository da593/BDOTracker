from django.db import models

# Create your models here.
class MarketplaceItem(models.Model):
    item_id = models.BigIntegerField(primary_key=True)
    item_name = models.CharField(max_length=100, blank=True, null=True)
    min_enhance = models.IntegerField()
    max_enhance = models.IntegerField()
    base_price = models.BigIntegerField(blank=True, null=True)
    in_stock = models.BigIntegerField(blank=True, null=True)
    total_trades = models.BigIntegerField(blank=True, null=True)
    min_price_list = models.BigIntegerField(blank=True, null=True)
    max_price_list = models.BigIntegerField(blank=True, null=True)
    last_sale_price = models.BigIntegerField(blank=True, null=True)
    last_sale_time = models.CharField(max_length=32, blank=True, null=True)
    item_type = models.CharField(max_length=32)
    grade = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'marketplace_items'
        unique_together = (('item_id', 'min_enhance', 'max_enhance'),)


