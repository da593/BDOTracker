import {React} from "react";
import { filterProfession, SelectColumnFilter, SelectProfessionFilter } from "./SelectColumnFilter";
import {MinimumValueFilter} from './MinimumValueFilter';

const pearlMarketHeaders = [
   {
      Header: "Item Type",
      accessor:"item_type",
      Filter: SelectColumnFilter,
      filter: 'includes',
      disableSortBy: true,
   },
   {
      Header: "Item Grade",
      accessor:"grade",
      show: false,
      disableFilters: true,
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
      },
      disableFilters: true,
   },
   {
      Header: "Hourly Sale (1h)" ,
      accessor: "hourly_sale",
      disableFilters: true,
   },
   {
      Header: "Daily Sale (1D)",
      accessor: "daily_sale",
      disableFilters: true,
   },
   {
      Header: "Weekly Sale (7D)",
      id:"weekly_sale",
      accessor: "weekly_sale",
      disableFilters: true,
   },
   {
      Header: "Monthly Sale (30D)",
      accessor: "monthly_sale",
      disableFilters: true,
   },
   {
      Header: "Total Trades",
      accessor: "total_trades",
      disableFilters: true,

   },
 ]

 const imperialHeaders = [
   {
      Header: "Profession Required",
      accessor: "profession_level",
      Cell: ({cell}) => {
         return (
           <div style={{ color: getProfessionColor(cell.value)}}>
             {cell.value}
           </div>
         );
       },
       Filter: SelectProfessionFilter,
       filter: filterProfession,
       disableSortBy: true,
   },
   
   {
      Header: "Item Grade",
      accessor:"grade",
      show: false,
  },
   {
      Header: "Item Name & Qty.",
      accessor: "item_name",
      Cell: ({row}) => {
         return (
           <div style={{ color: getItemGradeColor(row.original.grade)}}>
             {row.original.item_name} {"x"}{row.original.quantity}
           </div>
         );
       },
       disableFilters: true,
       
   },

   {
      Header: "In Stock",
      accessor: "in_stock",
      Filter: MinimumValueFilter,
      filter:  'between',
      
   },
   {
      Header: "Price",
      accessor: "base_price",
      disableFilters: true,
   },
   {
      Header: "Total Qty.",
      accessor: "total_quantity",
      disableFilters: true,
      toolTip: "Total amount of items needed to make all the boxes available at your CP",
   },
   {
      Header: "Profit Per Box",
      accessor: "profit_box",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortType: 'basic',
      sortDescFirst: true,
   },
   {
      Header: "Total Profit",
      id:"total_profit",
      accessor: "total_profit",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortType: 'basic',
      sortDescFirst: true,
   },
   {
      Header: "Revenue Per Box",
      accessor: "revenue_box",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortDescFirst: true,
   },
   {
      Header: "Total Revenue",
      accessor: "total_revenue",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortDescFirst: true,
   },
]

const farmingHeaders = [
 
   {
      Header: "Item Grade",
      accessor:"grade",
      show: false,
      disableFilters:true,
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
       },
       disableFilters: true,
   },
   {
      Header: "Fruit",
      accessor: "fruit",
      disableFilters: true,
   },
   {
      Header: "Growth time (min)",
      accessor: "growth_time",
      disableFilters: true,
      toolTip:"Growth time based on perfect time (perfect environnment for crop) or fertilzer used time"
   },
   {
      Header: "Harvest per Day",
      accessor: "harvest_day",
      sortDescFirst: true,
      disableFilters: true,
   },
   {
      Header: "Crop in Stock",
      accessor: "in_stock",
      disableFilters: true,
      toolTip: "Amount of crops on the marketplace"
   },

   {
      Header: "Market",
      id:"market",
      accessor: "market",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortDescFirst: true,
      toolTip: "Calculated based on selling harvested crops, stonetail fodder and fruits to marketplace"
   },
   {
      Header: "Vendor",
      accessor: "vendor",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortDescFirst: true,
      toolTip: "Calculated based on selling excess magical seeds to vendor and selling stonetail fodder and fruits to marketplace"
   },
   {
      Header: "Crate",
      accessor: "crate",
      Cell: ({cell}) => {
         return (
           <div style={{ color: profitColor(cell.value)}}>
             {"$"}{cell.value.toLocaleString({maximumFractionDigits:0})}
           </div>
         );
       },
      disableFilters: true,
      sortDescFirst: true,
      toolTip: "Calculated based on trading crates produced from harvested crops and selling stonetail fodder and fruits to marketplace"
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
         return "#7cb84f"
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

function getProfessionColor(profession) {
   switch (profession) {
      case "apprentice":
         return "#7cb84f"
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

function profitColor(value) {
   if (value > 0) {
      return "green"
   }
   else if (value < 0 ) {
      return "red"
   }
   else {
      return "white"
   }
}



