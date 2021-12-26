
export function calculateFarmingData(crop_data,fruit_data,inputValues) {

    for (let i=0;i<crop_data.length;i++) {

        if (inputValues.fertilizer ==='yes') {
            crop_data[i]['growth_time'] = crop_data[i]['fertilizer_growth_minutes']
        }
        else {
            crop_data[i]['growth_time'] = crop_data[i]['perfect_growth_minutes']
        }
        

        var tax = calculateTax(inputValues.fame,inputValues.vp,inputValues.ring)
        var fruitValue = findFruitValue(crop_data[i]['fruit'],fruit_data)
        var stonetailValue = findFruitValue("Stonetail Fodder",fruit_data)
        crop_data[i]['harvest_day'] = Math.min(inputValues.cycle, Math.floor(inputValues.hours * 60/ crop_data[i]['growth_time']) )
        crop_data[i]['market'] = calculateMarketProfit(crop_data[i]['slots'],stonetailValue,fruitValue,crop_data[i]['base_price'], crop_data[i]['harvest_day'],tax,inputValues.slots)
        crop_data[i]['vendor'] = calculateVendorProfit(crop_data[i]['slots'],stonetailValue,fruitValue,crop_data[i]['seed_price'], crop_data[i]['harvest_day'],tax,inputValues.slots)
        
        //Crate calculations
        var bspValue = findFruitValue("Black Stone Powder",fruit_data)
        var crateBase = findCrateBase(crop_data[i]['item_name'])
        
        if (crateBase <= 0) {
            crop_data[i]['crate'] = 0
           
        }
        else {
            var crateValue = calculateCrateValue(bspValue,crateBase,inputValues.cratesPerTask,inputValues.origin,inputValues.pLevel,inputValues.pSelect)
            
            crop_data[i]['crate'] = calculateCrateProfit(crop_data[i]['slots'],stonetailValue,fruitValue,crateValue, crop_data[i]['harvest_day'],tax,inputValues.slots)
            
        }
        
    }
    //console.log(crop_data)
  
    return crop_data
}




function calculateTax(fame,vp,ring) {

    
    
    var afterSaleBonuses = 1

    if (fame >= 1000 && fame <=3999){
        afterSaleBonuses += 0.005 
    }
    else if (fame >= 4000 && fame <=6999) {
        afterSaleBonuses += 0.01
    }
    else if (fame >= 7000) {
        afterSaleBonuses += 0.015
      
    }
    
    if (vp === "yes") {
        afterSaleBonuses += 0.3
    }

    if (ring === "yes") {
        afterSaleBonuses += 0.05
    }
    return 0.65 * afterSaleBonuses
}

function calculateReturnsPerCycle(totalSeeds,slots,harvestBool) {
    const seedRate = 1.55
    const fodderRate = 0.25
    const fruitRate = 0.75
    const fiveSlotCrop = 150
    const tenSlotCrop = 132.5

    var totalBreeds = 0 
    var totalHarvests = 0
    var totalCrops = 0
    var seedsReturn = 0
    
    if (harvestBool === "true") {
        totalBreeds = totalSeeds / seedRate
        totalHarvests = totalSeeds - totalBreeds
        seedsReturn = 0
        if (slots === 10) {
            totalCrops = totalHarvests * tenSlotCrop * 2
        }
        else if (slots === 5) {
            totalCrops = totalHarvests * fiveSlotCrop
        }
    }
    else {
        totalBreeds = totalSeeds
        totalHarvests = 0
        totalCrops = 0
        seedsReturn = totalSeeds * (seedRate - 1) 
    }

    var totalFodder = fodderRate * totalBreeds
    var totalFruits = fruitRate * totalBreeds

    
    return {"totalBreeds":totalBreeds,"totalHarvest":totalHarvests,"totalFodder":totalFodder,"totalFruits":totalFruits,"totalCrops":totalCrops,"seedsReturn":seedsReturn}
}

function calculateCrateValue(bsp,crateBase,cratesPerTask,origin,pLevel,pSelect) {

    const transportCost = 20000000
    const cpCost = 200000
    const cpInvest = 5

    var crateCost = bsp + cpInvest * cpCost/(100*cratesPerTask) + transportCost / 7157
    var distanceBonus = 0
    
    if (origin === "grana") {
        distanceBonus = 1.1385
    }
    else if (origin === "old-wisdom-tree") {
        distanceBonus = 1.0407
    }
   
    var tradeLevel = parseInt(pLevel)
    
    if (tradeLevel === 0) {
        tradeLevel += 1
    }

    if (pSelect === 1 ) {
        tradeLevel += 0
    }

    else if (pSelect === 2) {
        tradeLevel += 10
    }

    else if (pSelect === 3) {
        tradeLevel += 20
    }

    else if (pSelect === 4) {
        tradeLevel += 30
    }

    else if (pSelect === 5) {
        tradeLevel += 40
    }

    else if (pSelect === 6) {
        tradeLevel += 50
    }

    else if (pSelect === 7) {
        tradeLevel += 80
    }
    
    var tradeBonus = (1+distanceBonus) * (1+0.05+tradeLevel*0.005) * 1.5
    var crateDelivery = crateBase * tradeBonus - crateCost
   
    return crateDelivery / 10
}

function calculateMarketProfit(cropSlot,fodderValue,fruitValue,cropValue,totalCycles,tax,slots) {
    let returns = calculateReturnsPerCycle(Math.floor(slots/cropSlot),cropSlot,"true")
    let market = (fodderValue * returns.totalFodder + fruitValue * returns.totalFruits + cropValue * returns.totalCrops) * totalCycles * tax

    return market
}


function calculateVendorProfit(cropSlot,fodderValue,fruitValue,seedValue,totalCycles,tax,slots) {
    let returns = calculateReturnsPerCycle(Math.floor(slots/cropSlot),cropSlot,"false") 
    let vendor = (fodderValue * returns.totalFodder * tax + fruitValue * returns.totalFruits * tax + seedValue * returns.seedsReturn) * totalCycles
    return vendor
}

function calculateCrateProfit(cropSlot,fodderValue,fruitValue,crateValue,totalCycles,tax,slots) {
    let returns = calculateReturnsPerCycle(Math.floor(slots/cropSlot),cropSlot,"true")
    let crate = (fodderValue * returns.totalFodder * tax + fruitValue * returns.totalFruits * tax + crateValue * returns.totalCrops) * totalCycles
   
    return crate
}




function findFruitValue(name,fruitData) {
    
    for (let i=0;i<fruitData.length;i++) {
        
        if (fruitData[i]['item_name'].toUpperCase() === name.toUpperCase()) {
          
            return fruitData[i]['base_price']
        }
    }
}

function findCrateBase(crop) {
    const baseCrateValues = [
        {"name":"Special Sunflower","base":15240},
        {"name":"Special Carrot","base":13200},
        {"name":"Special Corn","base":5295},
        {"name":"Special Wheat","base":5040},
        {"name":"Special Potato","base":4530},
        {"name":"Special Sweet Potato","base":4530},
        {"name":"Special Barley","base":5040},
        {"name":"Special Olive","base":15240},
        {"name":"Special Pumpkin","base":13200},
        {"name":"Special Tomato","base":13710},
        {"name":"Special Paprika","base":14220},
        {"name":"Special Strawberry","base":12690},
        {"name":"Special Grape","base":14730},
        {"name":"Special Garlic","base":14220},
        {"name":"Special Onion","base":13710},
        {"name":"Special Pepper","base":12435},
        {"name":"Special Hot Pepper","base":12945},
        {"name":"Special Fire Flake Flower","base":6060},
        {"name":"Special Silver Azalea","base":6315},
        {"name":"Special Dry Mane Grass","base":5805},
        {"name":"Special Silk Honey Grass","base":5550},
        {"name":"Special Nolina","base":7335},
        {"name":"Special Dalvenia Alrea","base":7080},
        {"name":"Special Acacia Leaf","base":1830},
        {"name":"Special Delotia","base":0},
        {"name":"Special Emperor Mushroom","base":9630},
        {"name":"Special Hump Mushroom","base":10650},
        {"name":"Special Arrow Mushroom","base":10650},
        {"name":"Special Dwarf Mushroom","base":10140},
        {"name":"Special Fortune Teller Mushroom","base":9630},
        {"name":"Special Cloud Mushroom","base":10650},
        {"name":"Special Tiger Mushroom","base":10140},
        {"name":"Special Ghost Mushroom","base":10650},
        {"name":"Special Sky Mushroom","base":10140},
        {"name":"Special Amanita Mushroom","base":8100},
        {"name":"Special Ancient Mushroom","base":10650},
        {"name":"Special Bouquet Mushroom","base":10905},
        {"name":"Special Leccinum","base":11415},
        {"name":"Special Purple Mushroom","base":11925},
        {"name":"Special Pie Mushroom","base":11670},
        {"name":"Special Fog Mushroom","base":10140},
        {"name":"Special Bluffer Mushroom","base":9885},
    ]

    for (let i=0;i<baseCrateValues.length;i++) {
        if (baseCrateValues[i].name === crop) {
            return baseCrateValues[i].base
        }
    }
}


