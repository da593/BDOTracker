from Database.DatabaseClass import DatabaseClass
from RequestAPI.getResponse import *
from RequestAPI.parseResponse import *
import time

#A class to handle the marketplace db with specialize CRUD methods
class MarketPlaceDB(DatabaseClass):
    #Connect to marketplacedb
    def __init__(self):
        super().__init__(["localhost", "root", "BDOProject"])
        self.setDatabase("marketplacedb")
        self.TABLE = "marketplace_items"


    def create(self,tuple_values):
        sql = (
            "INSERT INTO {}".format(self.TABLE) +
            " (item_id, min_enhance, max_enhance, base_price, in_stock, "
            "total_trades, min_price_list,max_price_list,last_sale_price,last_sale_time)"
            "VALUES (%s, %s, %s, %s, %s,%s, %s,%s,%s,%s)"
            "ON DUPLICATE KEY UPDATE "
            "base_price=VALUES(base_price), in_stock=VALUES(in_stock),total_trades=VALUES(total_trades),"
            "min_price_list=VALUES(min_price_list),last_sale_price=VALUES(last_sale_price),"
            "last_sale_time=VALUES(last_sale_time)"
        )
        self.cursor.execute(sql,tuple_values)
        self.cnx.commit()


    def getItemNames(self,item_name):
        if item_name == "ALL":
            sql = ("SELECT * FROM {}".format(self.TABLE))

        else:
            sql = ("SELECT * FROM {} WHERE item_name={}".format(self.TABLE,item_name))

        return self.fetchAll(sql)


    def updateAll(self):
        item_ids = self.getItemNames("ALL")

        start_time = time.time()
        for i in item_ids:
            payload = {
                "keyType": 0,
                "mainKey": i[0]
            }

            # Get response from API, parse it, then update the database with response
            response = getSubListResponse(payload)
            if (response == "0"):
                continue
            else:
                items = parseMarketplaceItem(response)

                for item in items:
                    sql = (
                        "INSERT INTO {}".format(self.TABLE) +
                        " (item_id, min_enhance, max_enhance, base_price, in_stock, "
                        "total_trades, min_price_list,max_price_list,last_sale_price,last_sale_time)"
                        "VALUES (%s, %s, %s, %s, %s,%s, %s,%s,%s,%s)"
                        "ON DUPLICATE KEY UPDATE "
                        "base_price=VALUES(base_price), in_stock=VALUES(in_stock),total_trades=VALUES(total_trades),"
                        "min_price_list=VALUES(min_price_list),last_sale_price=VALUES(last_sale_price),"
                        "last_sale_time=VALUES(last_sale_time)"
                    )

                    self.cursor.execute(sql, tuple(item))
                    self.cnx.commit()
            print("Item ID", i[0], "has been updated")

        print("{} seconds to update database".format(time.time() - start_time))
        self.displayLastUpdate()

    def updateVolatileItems(self):
        response = getVolatileListResponse()
        items = parseVolatileItems(response)
        start_time = time.time()
        for item in items:
            sql = (
                    "INSERT INTO {}".format(self.TABLE) +
                    " (item_id, min_enhance, max_enhance, base_price, in_stock, "
                    "total_trades, min_price_list,max_price_list,last_sale_price,last_sale_time)"
                    "VALUES (%s, %s, %s, %s, %s,%s, %s,%s,%s,%s)"
                    "ON DUPLICATE KEY UPDATE "
                    "base_price=VALUES(base_price), in_stock=VALUES(in_stock),total_trades=VALUES(total_trades),"
                    "min_price_list=VALUES(min_price_list),last_sale_price=VALUES(last_sale_price),"
                    "last_sale_time=VALUES(last_sale_time)"
            )
            self.cursor.execute(sql, tuple(item))
            self.cnx.commit()
            print("Item ID", item[0], "has been updated")
        print("{} seconds to update database".format(time.time() - start_time))

        self.displayLastUpdate()

