from Database.connectToMySql import createConnection
from Database.createDatabase import createDatabase
from Database.createTable import createTable
from Database.upsertData import upsertData
from RequestAPI.getResponse import getResponse
from RequestAPI.parseResponse import parseMarketplaceItem


#Must change hardcoded username and password. Testing purposes
cnx, mycursor = createConnection("root","BDOProject")

cnx, mycursor = createDatabase(cnx,mycursor,"marketplacedb")

#Create the table based on id and enhancement range. Columns are marketplace data
#Item ID - enhance.min - enhance.max - base price - in stock - Total trades - price in - price max - last sale price - last sale time

TABLES = {}

TABLES["marketplace_items"] = (
    "CREATE TABLE `marketplace_items` ("
    " `item_id` BIGINT(8) NOT NULL,"
    " `item_name` varchar(16),"
    " `min_enhance` int(11),"
    " `max_enhance` int(11),"
    " `base_price` BIGINT(8),"
    " `in_stock` BIGINT(8),"
    " `total_trades` BIGINT(8),"
    " `min_price_list` BIGINT(8),"
    " `max_price_list` BIGINT(8),"
    " `last_sale_price` BIGINT(8),"
    " `last_sale_time` varchar(32),"
    " PRIMARY KEY (`item_id`, `min_enhance` , `max_enhance`)"
    ") ENGINE = InnoDB")



cnx, mycursor = createTable(cnx, mycursor, TABLES)

add_item = (
    "INSERT INTO marketplace_items"
    "(item_id, min_enhance, max_enhance, base_price, in_stock, "
    "total_trades, min_price_list,max_price_list,last_sale_price,last_sale_time)"
    "VALUES (%s, %s, %s, %s, %s,%s, %s,%s,%s,%s)"
    "ON DUPLICATE KEY UPDATE "
    "base_price=VALUES(base_price), in_stock=VALUES(in_stock),total_trades=VALUES(total_trades),"
    "min_price_list=VALUES(min_price_list),last_sale_price=VALUES(last_sale_price),"
    "last_sale_time=VALUES(last_sale_time)"
)

#URL and header for marketplace data
url = 'https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSubList'
headers = {
    "Content-Type": "application/json",
    "User-Agent": "BlackDesert",
    "cookie": "visid_incap_2504216=1c%2FH2VetS%2FeZihDG6z7E9QIIoWAAAAAAQUIPAAAAAAA6X8M83f1Phv%2BPRqqkMjF%2F; nlbi_2504216=w0WTY261IhfxWhLpoDFtLwAAAACqkRKdV1p2v7vzexYYoVQg; incap_ses_876_2504216=G054LgVtC39mlu5grS0oDAIIoWAAAAAAHal%2FMOTTzoq4I6krrEwXCQ%3D%3D"
}

#Get all item ids from database and update it from API information using mainkey.
# **Must change below code to either search API or update from API**
mycursor.execute("SELECT item_id FROM marketplace_items ")
item_ids = mycursor.fetchall()
for i in item_ids:
    payload = {
        "keyType": 0,
        "mainKey": i[0]
    }

    #Get response from API, parse it, then upsert it into database
    response = getResponse(url,headers,payload)
    if (response == "0"):
        continue
    else:
        items = parseMarketplaceItem(response)
        for item in items:

            upsertData(cnx,mycursor,add_item,tuple(item))
    print("Item ID",i[0],"has been upserted")




