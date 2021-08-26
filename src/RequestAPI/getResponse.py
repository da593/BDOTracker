#Retrieve marketplace data from https://developers.veliainn.com/#GetWorldMarketList in JSON format

import requests

def getResponse(url,headers,payload):

  response = requests.request('POST', url, json=payload, headers=headers)
  return response.text[29:].rstrip(' |"} ')

