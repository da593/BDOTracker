
//Calculate quantity, revenue, and profit and is added to JSON data field to be rendered into the table
//data is an array of JSON objects
export function calculateImperialData(type,mydata,inputValues) {
    inputValues = JSON.parse(inputValues)
    for (let i =0; i<mydata.length; i++) {
        mydata[i]['total_quantity'] = mydata[i].quantity * Math.floor(inputValues.cp / 2)
        var masteryRounded = Math.floor(inputValues.mastery / 50) * 50
        var revenueBox = calcRevenue(type,masteryRounded,mydata[i].profession_level)
        var profitBox = revenueBox - mydata[i].quantity * mydata[i].base_price
        var totalProfit = profitBox * Math.floor(inputValues.cp / 2)
        var totalRevenue = revenueBox * Math.floor(inputValues.cp / 2)
        mydata[i]['profit_box'] = profitBox
        mydata[i]['revenue_box'] = revenueBox
        mydata[i]['total_profit'] = totalProfit
        mydata[i]['total_revenue'] = totalRevenue
       
    }
    return mydata
}

//Calculates revenue by getting % increase value from mastery and box prices from profession level
function calcRevenue(type,mastery,profession_level) {
    const masteryValues = [
        {"0":{"cooking":0,"alchemy":0}},
        {"50":{"cooking":0.0185,"alchemy":0.0270}},
        {"100":{"cooking":0.0296,"alchemy":0.0315}},
        {"150":{"cooking":0.0433,"alchemy":0.0363}},
        {"200":{"cooking":0.0595,"alchemy":0.0415}},
        {"250":{"cooking":0.0784,"alchemy":0.0470}},
        {"300":{"cooking":0.0999,"alchemy":0.0529}},
        {"350":{"cooking":0.1239,"alchemy":0.0591}},
        {"400":{"cooking":0.1505,"alchemy":0.0657}},
        {"450":{"cooking":0.1798,"alchemy":0.0726}},
        {"500":{"cooking":0.2116,"alchemy":0.0799}},
        {"550":{"cooking":0.2460,"alchemy":0.0875}},
        {"600":{"cooking":0.2830,"alchney":0.0954}},
        {"650":{"cooking":0.3226,"alchemy":0.1037}},
        {"700":{"cooking":0.3648,"alchemy":0.1124}},
        {"750":{"cooking":0.4096,"alchemy":0.1213}},
        {"800":{"cooking":0.4570,"alchemy":0.1307}},
        {"850":{"cooking":0.5069,"alchemy":0.1404}},
        {"900":{"cooking":0.5595,"alchemy":0.1504}},
        {"950":{"cooking":0.6147,"alchemy":0.1607}},
        {"1000":{"cooking":0.6724,"alchemy":0.1715}},
        {"1050":{"cooking":0.7327,"alchemy":0.1825}},
        {"1100":{"cooking":0.7957,"alchemy":0.1939}},
        {"1150":{"cooking":0.8612,"alchemy":0.2057}},
        {"1200":{"cooking":0.9293,"alchemy":0.2178}},
        {"1250":{"cooking":0.9584,"alchemy":0.2302}},
        {"1300":{"cooking":0.9880,"alchemy":0.2430}},
        {"1350":{"cooking":1.0181,"alchemy":0.2561}},
        {"1400":{"cooking":1.0486,"alchemy":0.2696}},
        {"1450":{"cooking":1.0795,"alchemy":0.2834}},
        {"1500":{"cooking":1.1109,"alchemy":0.2976}},
        {"1550":{"cooking":1.1428,"alchemy":0.3121}},
        {"1600":{"cooking":1.1751,"alchemy":0.3270}},
        {"1650":{"cooking":1.2078,"alchemy":0.3422}},
        {"1700":{"cooking":1.2410,"alchemy":0.3577}},
        {"1750":{"cooking":1.2746,"alchemy":0.3736}},
        {"1800":{"cooking":1.3087,"alchemy":0.3899}},
        {"1850":{"cooking":1.3433,"alchemy":0.4065}},
        {"1900":{"cooking":1.3783,"alchemy":0.4234}},
        {"1950":{"cooking":1.4137,"alchemy":0.4407}},
        {"2000":{"cooking":1.4496,"alchemy":0.4583}},
  
            
    ]
    
    var imperialIncrease = 0
    if (type === "/cooking"){
        imperialIncrease = masteryValues[mastery/50][mastery].cooking
        
    }
    else if (type ==="/alchemy") {
        imperialIncrease = masteryValues[mastery/50][mastery].alchemy
    }
    
    var boxPrice = 0
    var basePrice = 0
    if (profession_level === "apprentice") {
        boxPrice = 130000
        basePrice = 52000
    }

    else if (profession_level ==="skilled") {
        boxPrice = 200000
        basePrice = 80000
    }

    else if (profession_level ==="professional") {
        boxPrice = 300000
        basePrice = 120000
    }

    else if (profession_level ==="artisan") {
        boxPrice = 400000
        basePrice = 160000
    }

    else if (profession_level ==="master") {
        boxPrice = 550000
        basePrice = 220000
    }

    else if (profession_level ==="guru") {
        boxPrice = 800000
        basePrice = 320000
    }

    return boxPrice + (basePrice * imperialIncrease)
}


