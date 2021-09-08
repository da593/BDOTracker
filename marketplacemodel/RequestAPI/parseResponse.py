import datetime
#Splits the response that has multiple items
def parseMarketplaceItem(response):
    items = [item.split("-") for item in response.split("|")]
    for item in items:
        item[-1] = datetime.datetime.fromtimestamp(int(item[-1])).strftime('%Y-%m-%d %H:%M:%S')
    return items

#This response has additional fields for price change direction and value which is deleted to maintain data structure
def parseVolatileItems(response):
    items = [item.split("-") for item in response.split("|")]
    for item in items:
        item[-1] = datetime.datetime.fromtimestamp(int(item[-1])).strftime('%Y-%m-%d %H:%M:%S')
        del item[6]
        del item[7]

    return items
