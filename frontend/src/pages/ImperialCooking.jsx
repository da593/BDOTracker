import React,{useState,useEffect} from "react";
import PageLayout from "./PageLayout";
import {getData} from '../api/apiClient'


function ImperialCooking() {
   const [data,setData] = useState(null)
   const endpoint="/cooking"

   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         
         return(response.status)
      })
      },[] )


   
   return (
      <PageLayout          
      title={"Imperial Cooking"}
      description={"Determine imperial delivery profit from various meals based on marketplace value or total revenue"}
      input={
         <p>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default ImperialCooking