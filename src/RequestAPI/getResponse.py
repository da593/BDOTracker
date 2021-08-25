#Retrieve marketplace data from https://developers.veliainn.com/#GetWorldMarketList in JSON format

import requests

url = 'https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketSubList'
headers = {
  "Content-Type": "application/json",
  "User-Agent": "BlackDesert",
  "cookie": "visid_incap_2504216=1c%2FH2VetS%2FeZihDG6z7E9QIIoWAAAAAAQUIPAAAAAAA6X8M83f1Phv%2BPRqqkMjF%2F; nlbi_2504216=w0WTY261IhfxWhLpoDFtLwAAAACqkRKdV1p2v7vzexYYoVQg; incap_ses_876_2504216=G054LgVtC39mlu5grS0oDAIIoWAAAAAAHal%2FMOTTzoq4I6krrEwXCQ%3D%3D"
}
payload = {
  "keyType": 0,
  "mainKey": 10003
}
#Response string format
#Item ID - enhance.min - enhance.max - base price - in stock - Total trades - price in - price max - last sale price - last sale time
response = requests.request('POST', url, json=payload, headers=headers)
print(type(response.text))