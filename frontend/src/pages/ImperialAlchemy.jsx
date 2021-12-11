import React,{useState,useEffect,useRef} from "react";
import PageLayout from "./PageLayout";
import {getData} from '../api/apiClient'

function ImperialAlchemy() {
   const [data,setData] = useState(null)
   const endpoint="/alchemy"

   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         
         return(response.status)
      })
      },[] )

   return (
      <PageLayout          
      title={"Imperial Alchemy"}
      description={"Determine imperial delivery profit from various elixirs based on marketplace value or total revenue"}
      input={
         <p>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default ImperialAlchemy