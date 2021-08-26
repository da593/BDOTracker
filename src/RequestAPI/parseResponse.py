import datetime

def parseMarketplaceItem(response):
    items = [item.split("-") for item in response.split("|")]
    for item in items:
        item[-1] = datetime.datetime.fromtimestamp(int(item[-1])).strftime('%Y-%m-%d %H:%M:%S')
        item.append

    return items