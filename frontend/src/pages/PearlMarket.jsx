import React,{useState,useEffect,useMemo} from "react";
import PageManager from "./PageManager";
import {getData} from '../api/apiClient';
import PearlMarketTable from '../components/Tables/PearlMarketTable';


function PearlMarket() {
   const [loadingData,setLoadingData] = useState(true)
   const columns = useMemo(() => [
         {
            Header: "Item Name",
            accessor: "item_name"
         },
         {
            Header: "Hourly Sale",
            accessor: "hourly_sale"
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

      ],[]);
    
   const [data,setData] = useState([])
   const endpoint = "/pearlmarket"
   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         setLoadingData(false)

      }).catch((error) => {
         console.log(error)
      })

      },[] )


   
   return (
      <PageManager          
      title={"Pearl Market"}
      description={"Track the amount of pearl item sales for various periods to determine what is hot"}
      input={
         <form id="input-form">
               <label>Filter Item Type
                  <select id="item-type"  name="item-type">
                        <option value="all">All</option>
                        <option value="Male Set">Male Apparel (Set)</option>
                        <option value="Female Set">Female Apparel (Set)</option>
                        <option value="Male Individual">Male Apparel (Individual)</option>
                        <option value="Female Individual">Female Apparel (Individual)</option>
                        <option value="Class Set">Class-based Apparel (set)</option>
                        <option value="functional">Functional</option>
                        <option value="mount">Mount</option>
                        <option value="pet">Pet</option>
                  </select>
               </label>
        </form>
      }

      table={
         loadingData ? <p>Loading Please Wait...</p> : <PearlMarketTable columns={columns} data={data}/>
         
      }
      />

   )
}


export default PearlMarket