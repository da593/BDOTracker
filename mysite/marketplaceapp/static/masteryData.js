//Returns the percent increase of turning in boxes to imperial based on user's mastery input
function calcRevenue(mastery,profession_level) {
    masteryValues = [ 
        {"0":0},
        {"50":0.0185},
        {"100":0.0296},
        {"150":0.0433},
        {"200":0.0595},
        {"250":0.0784},
        {"300":0.0999},
        {"350":0.1239},
        {"400":0.1505},
        {"450":0.1798},
        {"500":0.2116},
        {"550":0.2460},
        {"600":0.2830},
        {"650":0.3226},
        {"700":0.3648},
        {"750":0.4096},
        {"800":0.4570},
        {"850":0.5069},
        {"900":0.5595},
        {"950":0.6147},
        {"1000":0.6724},
        {"1050":0.7327},
        {"1100":0.7957},
        {"1150":0.8612},
        {"1200":0.9293},
        {"1250":0.9584},
        {"1300":0.9880},
        {"1350":1.0181},
        {"1400":1.0486},
        {"1450":1.0795},
        {"1500":1.1109},
        {"1550":1.1428},
        {"1600":1.1751},
        {"1650":1.2078},
        {"1700":1.2410},
        {"1750":1.2746},
        {"1800":1.3087},
        {"1850":1.3433},
        {"1900":1.3783},
        {"1950":1.4137},
        {"2000":1.4496},
    ]
    var imperialIncrease = masteryValues[mastery/50][mastery]
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

