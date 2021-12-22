const pearlMarketHeaders = [
    {
        Header: "Item Grade",
        accessor:"grade",
    
    },
    {
       Header: "Item Name",
       accessor: "item_name",
       
    },
    {
       Header: "Hourly Sale",
       accessor: "hourly_sale",
    },
    {
       Header: "Daily Sale",
       accessor: "daily_sale"
    },
    {
       Header: "Weekly Sale",
       accessor: "weekly_sale"
    },
    {
       Header: "Monthly Sale",
       accessor: "monthly_sale"
    },
    {
       Header: "Total Trades",
       accessor: "total_trades"
    
    },


 ]


export function getColumnHeaders(url) {
    if (url === "/pearlmarket") {
        return pearlMarketHeaders
    }
}