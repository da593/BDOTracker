import React,{useState,useEffect} from "react";
import PageManager from "./PageManager";
import {getData} from '../api/apiClient'


function ImperialCooking() {
   const [data,setData] = useState(null)
   const endpoint="/cooking"

   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         
         return(response)
      })
      },[] )

   function  showData() {
      console.log(data)
   }
   
   return (
      <PageManager          
      title={"Imperial Cooking"}
      description={"Determine imperial delivery profit from various meals based on marketplace value or total revenue"}
      input={
         <p onClick={showData}>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default ImperialCooking