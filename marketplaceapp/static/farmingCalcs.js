function calculateFarmingData(crop_data=JSON.parse(document.getElementById('crop_data').textContent),fruit_data=JSON.parse(document.getElementById('fruit_data').textContent),stonetail_data = JSON.parse(document.getElementById('stonetail_data').textContent) ) {
    
    for (let i=0;i<crop_data.length;i++) {
        
        if (document.getElementById('fertilizer').value ==='yes') {
            crop_data[i]['growth_time'] = crop_data[i]['fertilizer_growth_minutes']
        }
        else {
            crop_data[i]['growth_time'] = crop_data[i]['perfect_growth_minutes']
        }

        var fruitValue = findFruitValue(fruit_data,crop_data[i]['fruit'])
        var tax = calculateTax()
        crop_data[i]['harvest_day'] = Math.min(document.getElementById('harvest-day').value, (document.getElementById('hours-online').value * 60/ crop_data[i]['growth_time']) )
        crop_data[i]['crate'] = calculateCrateProfit(crop_data[i]['slots'],stonetail_data[0]['base_price'],fruitValue,crop_data[i]['base_price'], crop_data[i]['harvest_day'],tax,crop_data[i]['item_name'])
        crop_data[i]['market'] = calculateMarketProfit(crop_data[i]['slots'],stonetail_data[0]['base_price'],fruitValue,crop_data[i]['base_price'], crop_data[i]['harvest_day'],tax,crop_data[i]['item_name'])
        crop_data[i]['vendor'] = calculateVendorProfit(crop_data[i]['slots'],stonetail_data[0]['base_price'],fruitValue,crop_data[i]['seed_price'], crop_data[i]['harvest_day'],tax,crop_data[i]['item_name'])
    
    }
   
    console.log(crop_data)
    return crop_data
}

function calculateTax() {
    var fame = document.getElementById("family-fame".value)
    var tax = 0.65
    var afterSaleBonuses = 1
    if (fame >= 1000 || fame<=3999){
        afterSaleBonuses = afterSaleBonuses + 0.005 
    }
    else if (fame >= 4000 || fame<=6999) {
        afterSaleBonuses = afterSaleBonuses + 0.01
    }
    else if (fame >= 7000) {
        afterSaleBonuses = afterSaleBonuses + 0.015
    }
    
    if (document.getElementById("value-pack").value === "yes") {
        afterSaleBonuses = afterSaleBonuses + 0.3
    }

    if (document.getElementById("merchant-ring").value === "yes") {
        afterSaleBonuses = afterSaleBonuses + 0.05
    }
    
    return 0.65 * afterSaleBonuses
}

function calculateReturnsPerCycle(totalSeeds,slots,harvestBool,name) {
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
        if (slots == 10) {
            totalCrops = totalHarvests * tenSlotCrop * 2
        }
        else if (slots == 5) {
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


function calculateCrateProfit(cropSlot,fodderValue,fruitValue,cropValue,totalCycles,tax,name) {
    returns = calculateReturnsPerCycle(Math.floor(document.getElementById("farming-slots").value/cropSlot),cropSlot,"true")
    crate = (fodderValue * returns.totalFodder * tax + fruitValue * returns.totalFruits * tax + cropValue * returns.totalCrops) * totalCycles
    return crate
}


function calculateMarketProfit(cropSlot,fodderValue,fruitValue,cropValue,totalCycles,tax,name) {
    returns = calculateReturnsPerCycle(Math.floor(document.getElementById("farming-slots").value/cropSlot),cropSlot,"true",name)
    market = (fodderValue * returns.totalFodder + fruitValue * returns.totalFruits + cropValue * returns.totalCrops) * totalCycles * tax

    return market
}


function calculateVendorProfit(cropSlot,fodderValue,fruitValue,seedValue,totalCycles,tax,name) {
    returns = calculateReturnsPerCycle(Math.floor(document.getElementById("farming-slots").value/cropSlot),cropSlot,"false") 
    vendor = (fodderValue * returns.totalFodder * tax + fruitValue * returns.totalFruits * tax + seedValue * returns.seedsReturn) * totalCycles
    return vendor
}

function findFruitValue(fruit_data,name) {
    
    for (let i=0;i<fruit_data.length;i++) {
        
        if (fruit_data[i]['item_name'] === name) {
          
            return fruit_data[i]['base_price']
        }
    }
}
    
