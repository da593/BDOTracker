import React,{useState,useEffect,useMemo} from "react";
import PageManager from "./PageManager";
import {getData} from '../api/apiClient';
import PearlMarketTable from '../components/Tables/PearlMarketTable';
import { getColumnHeaders } from "../components/Tables/getColumnHeaders";


const gradeColorMap =  {
   1: 'white',
   2: '#0391c4',
   3: '#f6c232',
   4: '#ff8315',
   // etc 
 }

function PearlMarket() {
   const endpoint = "/pearlmarket"
   const [loadingData,setLoadingData] = useState(true)
   const columns = useMemo(() => getColumnHeaders(endpoint),[]);
    
   const [data,setData] = useState([])

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
         loadingData ? <p>Loading Please Wait...</p> : 
         <PearlMarketTable
          columns={columns} 
          data={data}
          hiddenColumns={'grade'}
      
         />
         
      }
      />

   )
}


export default PearlMarket