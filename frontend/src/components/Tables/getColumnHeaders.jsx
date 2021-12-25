import {React} from "react";
import { filterMastery, SelectColumnFilter, SelectMasteryFilter } from "./SelectColumnFilter";
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
      Header: "Mastery Required",
      accessor: "profession_level",
      Cell: ({cell,value}) => {
         return (
           <div style={{ color: getMasteryColor(cell.value)}}>
             {cell.value}
           </div>
         );
       },
       Filter: SelectMasteryFilter,
       filter: filterMastery,
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
      Header: "Total Item Required",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Profit Per Box",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Total Profit",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Revenue Per Box",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Total Revenue",
      accessor: "",
      disableFilters: true,
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
      Header: "Growth time",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Harvest per Day",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Crop in Stock",
      accessor: "in_stock",
      disableFilters: true,
   },

   {
      Header: "Market",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Vendor",
      accessor: "",
      disableFilters: true,
   },
   {
      Header: "Crate",
      accessor: "",
      disableFilters: true,
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
         return "#b3ff7a"
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




