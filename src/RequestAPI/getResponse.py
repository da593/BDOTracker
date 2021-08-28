# Retrieve marketplace data from https://developers.veliainn.com/#GetWorldMarketList in JSON format

import requests


def getSubListResponse(payload):
    URL = 'https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSubList'
    HEADERS = {
        "Content-Type": "application/json",
        "User-Agent": "BlackDesert",
        "cookie": "visid_incap_2504216=1c%2FH2VetS%2FeZihDG6z7E9QIIoWAAAAAAQUIPAAAAAAA6X8M83f1Phv%2BPRqqkMjF%2F; nlbi_2504216=w0WTY261IhfxWhLpoDFtLwAAAACqkRKdV1p2v7vzexYYoVQg; incap_ses_876_2504216=G054LgVtC39mlu5grS0oDAIIoWAAAAAAHal%2FMOTTzoq4I6krrEwXCQ%3D%3D"
    }
    response = requests.request('POST', URL, json=payload, headers=HEADERS)
    return response.text[29:].rstrip(' |"} ')


def getVolatileListResponse():
    URL = 'https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketHotList'
    HEADERS = {
        "cookie": "visid_incap_2504216=1c%2FH2VetS%2FeZihDG6z7E9QIIoWAAAAAAQUIPAAAAAAA6X8M83f1Phv%2BPRqqkMjF%2F; nlbi_2504216=w0WTY261IhfxWhLpoDFtLwAAAACqkRKdV1p2v7vzexYYoVQg; incap_ses_876_2504216=G054LgVtC39mlu5grS0oDAIIoWAAAAAAHal%2FMOTTzoq4I6krrEwXCQ%3D%3D"
    }
    payload = {}

    response = requests.request('POST', URL, json=payload, headers=HEADERS)
    return response.text[29:].rstrip(' |"} ')

def findItemIDsResponse(startID,endID):
    file = open("itemtoadd.txt","w")
    for i in range(startID,endID+1):
        URL = 'https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSubList'
        HEADERS = {
            "Content-Type": "application/json",
            "User-Agent": "BlackDesert",
            "cookie": "visid_incap_2504216=1c%2FH2VetS%2FeZihDG6z7E9QIIoWAAAAAAQUIPAAAAAAA6X8M83f1Phv%2BPRqqkMjF%2F; nlbi_2504216=w0WTY261IhfxWhLpoDFtLwAAAACqkRKdV1p2v7vzexYYoVQg; incap_ses_876_2504216=G054LgVtC39mlu5grS0oDAIIoWAAAAAAHal%2FMOTTzoq4I6krrEwXCQ%3D%3D"
        }
        payload = {
            "keyType": 0,
            "mainKey": i
        }
        response = requests.request('POST', URL, json=payload, headers=HEADERS)
        result = response.text[29:].rstrip(' |"} ')
        if (result != "0"):
            file.writelines(str(i)+"\n")
            print("Item {} found".format(i))
        else:
            print("No item {}".format(i))

    file.close()