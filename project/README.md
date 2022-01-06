# Django + REST Framework
The design of the backend using Django and REST framework is shown below: <br/>
[![Backend-drawio.png](https://i.postimg.cc/PrNhhRgR/Backend-drawio.png)](https://postimg.cc/2Vpg728Q)
# API 

A token-based authentication is required to interact with the backend because it is limited to 40 requests per minute so only users interacting with my website should access the data.


## GET Imperial Cooking & Alchemy
```
[ 
    {
        'item_name': 'Fruit Wine',
        'base_price': 1610,
        'in_stock': 45431,
        'profession_level': 'skilled',
        'quantity':  45,
        'grade': 1
    },
    ...
]
```

## GET Pearl Market
```
[ 
    {
        'item_name': 'Brown Guide Hawk',
        'total_trades': 11641,
        'hourly_sale': 0,
        'daily_sale': 5,
        'weekly_sale': 40
        'monthly_sale': 182
        'item_type': "pet",
        'grade':  3,
    },
    ...
]
```

## GET Farming
```
[ 
    {
        'item_name': 'Special Silver Azalea',
        'base_price': 10400,
        'in_stock': 4342,
        'grade': 2,
        'perfect_growth_minutes': 293
        'fertilizer_growth_minutes': 235
        'slots': 5,
        'seed_price':  284600,
        'fruit: 'Fruit of Enchantment'
    },
    ...
]
```

## GET Fruit
```
[ 
    {
        'item_name': 'Fruit of Crimson Flame',
        'base_price': 129000,
    },
    ...
]
```

## POST Feedback
```
[ 
    {
        'feedback_type': 'like',
        'feedback': 'I like this website!,
        'time': '2021-12-27 22:40:12',
    },
]
```