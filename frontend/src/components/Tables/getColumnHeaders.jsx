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
       Header: "Hourly Sale (1h)",
       accessor: "hourly_sale",
    },
    {
       Header: "Daily Sale (1D)",
       accessor: "daily_sale"
    },
    {
       Header: "Weekly Sale (7D)",
       accessor: "weekly_sale"
    },
    {
       Header: "Monthly Sale (30D)",
       accessor: "monthly_sale"
    },
    {
       Header: "Total Trades",
       accessor: "total_trades"
    
    },
 ]

 const imperialHeaders = [
   {
      Header: "Box",
      accessor: "profession_level"
   },
   {
      Header: "Item Grade",
      accessor:"grade",
      
  },
   {
      Header: "Item Name",
      accessor: "item_name",
      
   },
   {
      Header: "In Stock",
      accessor: "in_stock"
   },
   {
      Header: "Price",
      accessor: "base_price",
   },
   {
      Header: "Total Item Required",
      accessor: ""
   },
   {
      Header: "Profit Per Box",
      accessor: ""
   },
   {
      Header: "Total Profit",
      accessor: ""
   },
   {
      Header: "Revenue Per Box",
      accessor: ""
   },
   {
      Header: "Total Revenue",
      accessor: ""
   },
]

const farmingHeaders = [

   {
      Header: "Item Grade",
      accessor:"grade",
      
  },
   {
      Header: "Crop",
      accessor: "item_name",
      
   },
   {
      Header: "Fruit",
      accessor: "fruit",
   },
   {
      Header: "Growth time",
      accessor: "",
   },
   {
      Header: "Harvest per Day",
      accessor: "",
   },
   {
      Header: "Crop in Stock",
      accessor: "in_stock"
   },

   {
      Header: "Market",
      accessor: ""
   },
   {
      Header: "Vendor",
      accessor: ""
   },
   {
      Header: "Crate",
      accessor: ""
   },
]


export function getColumnHeaders(url) {
   switch (url) {
      case "/pearlmarket":
         return pearlMarketHeaders
      case "/cooking":
         return imperialHeaders
      case "/alchemy":
         return imperialHeaders
      case "/farming":
         return farmingHeaders
      default:
         return []
   }

}