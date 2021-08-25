from Database.connectToMySql import createConnection
from Database.createDatabase import createDatabase
from Database.createTable import createTable


#Must change hardcoded username and password. Testing purposes
cnx, mycursor = createConnection("root","BDOProject")

cnx, mycursor = createDatabase(cnx,mycursor,"marketplaceDB")

#Create the table based on id and enhancement range. Columns are marketplace data
#Item ID - enhance.min - enhance.max - base price - in stock - Total trades - price in - price max - last sale price - last sale time
#CREATE TABLE table_name(
#   columnName datatype (char(len), int, float, varchar(len) ) (Not Null),
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
    " `last_sale_time` BIGINT(8),"
    " PRIMARY KEY (`item_id`, `min_enhance` , `max_enhance`)"
    ") ENGINE = InnoDB")



createTable(cnx, mycursor, TABLES)