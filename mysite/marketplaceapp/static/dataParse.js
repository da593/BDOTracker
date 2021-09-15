function parsedData() {
    var mydata = JSON.parse(document.getElementById('item_data').textContent);

    for (let i =0; i<mydata.length; i++) {
        mydata[i]['total_quantity'] = mydata[i].quantity * Math.floor(document.getElementById("cp").value / 2)
        var mastery = Math.floor(document.getElementById("mastery").value / 50) * 50
        var revenueBox = calcRevenue(mastery,mydata[i].profession_level)
        var profitBox = revenueBox - mydata[i].quantity * mydata[i].base_price
        var totalProfit = profitBox * Math.floor(document.getElementById("cp").value / 2)
        var totalRevenue = revenueBox * Math.floor(document.getElementById("cp").value / 2)
        mydata[i]['profit_box'] = profitBox
        mydata[i]['revenue_box'] = revenueBox
        mydata[i]['total_profit'] = totalProfit
        mydata[i]['total_revenue'] = totalRevenue
}
    
    return mydata
}

