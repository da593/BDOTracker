from RequestAPI.getResponse import *
from Database.MarketPlaceDB import MarketPlaceDB
import time


#Connect to marketplace database
db = MarketPlaceDB()

#Update the marketplace database (weekly)
#db.updateAll()

#Find ids to add to database
#findItemIDsResponse(340000,350000)

#Update volatile items (every 16 minutes to match API)
db.updateVolatileItems()



