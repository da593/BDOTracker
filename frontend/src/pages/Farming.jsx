import React,{useState,useEffect} from "react";
import PageLayout from "./PageManager";
import {getData} from '../api/apiClient'


function Farming() {
   const [data,setData] = useState(null)
   const endpoint="/farming"
   
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
      <PageLayout          
      title={"Magical Seed Farming"}
      description={"Determine marketplace,vendor, and crate profit from harvest/breeding magical crops"}
      input={
         <p onClick={showData}>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default Farming