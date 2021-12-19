import React,{useState,useEffect} from "react";
import PageManager from "./PageManager";
import {getData} from '../api/apiClient'

function ImperialAlchemy() {
   const [data,setData] = useState(null)
   const endpoint="/alchemy"

   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         
         return(response)
      })
      },[] )

   function showData() {
      console.log(data)
   }

   return (
      <PageManager          
      title={"Imperial Alchemy"}
      description={"Determine imperial delivery profit from various elixirs based on marketplace value or total revenue"}
      input={
         <p onClick={showData}>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default ImperialAlchemy