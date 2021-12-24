const pearlMarketHeaders = [
   {
      Header: "Item Type",
      accessor:"item_type",
      show: false,
   },
   {
      Header: "Item Grade",
      accessor:"grade",
      show: false,
   },
   {
      Header: "Item Name",
      accessor: "item_name",
      Cell: ({row}) => {
      return (
         <div style={{ color: getItemGradeColor(row.original.grade)}}>
            {row.original.item_name}
         </div>
      );
      }
   },
   {
      Header: "Hourly Sale (1h)" ,
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
      accessor: "profession_level",
      Cell: ({cell,value}) => {
         return (
           <div style={{ color: getMasteryColor(cell.value)}}>
             {cell.value}
           </div>
         );
       }
   },
   {
      Header: "Item Grade",
      accessor:"grade",
      show: false,
  },
   {
      Header: "Item Name",
      accessor: "item_name",
      Cell: ({row}) => {
         return (
           <div style={{ color: getItemGradeColor(row.original.grade)}}>
             {row.original.item_name}
           </div>
         );
       }
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
      show: false,
   },
   {
      Header: "Crop",
      accessor: "item_name",
      Cell: ({row}) => {
         return (
           <div style={{ color: getItemGradeColor(row.original.grade)}}>
             {row.original.item_name}
           </div>
         );
       }
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

function getItemGradeColor(grade) {
   switch (grade) {
      case 1:
         return "white"
      case 2:
         return "#0391c4"
      case 3:
         return "#f6c232"
      case 4:
         return "#ff8315"
      default:
         return "white"
   }

}

function getMasteryColor(mastery) {
   switch (mastery) {
      case "apprentice":
         return "#b3ff7a"
      case "skilled":
         return "#0391c4"
      case "professional":
         return "#f6c232"
      case "artisan":
         return "#d42626"
      case "master":
         return "#ad3495"
      case "guru":
         return "#ff8315"
      default:
         return "white"
   }
   
}