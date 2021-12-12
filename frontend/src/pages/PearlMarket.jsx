import React,{useState,useEffect} from "react";
import PageLayout from "./PageManager";
import {getData} from '../api/apiClient'


function PearlMarket() {
   const [data,setData] = useState(null)
   const endpoint = "/pearlmarket"

   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         return(response)
      }).catch((error) => {
         console.log(error)
      })
      },[] )
   
   function  showData() {
      console.log(data)
   }

   return (
      <PageLayout          
      title={"Pearl Market"}
      description={"Track the amount of pearl item sales for various periods to determine what is hot"}
      input={
         <p onClick={showData}>Input</p>
      }

      table={
         <p>Table</p>
      }
      />

   )
}


export default PearlMarket