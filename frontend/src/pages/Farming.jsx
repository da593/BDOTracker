import React,{useState,useEffect} from "react";
import PageLayout from "./PageManager";
import {getData} from '../api/apiClient'


const URL="/farming"



function Farming() {
   const [data,setData] = useState(null)
   const endpoint="/farming"
   
   useEffect(() =>  {
      getData(endpoint).then(function(response) {
         setData(response.data)
         
         return(response)
      })
      },[] )


   return (
      <PageLayout          
      title={"Magical Seed Farming"}
      description={"Determine marketplace,vendor, and crate profit from harvest/breeding magical crops"}
      input={
         <p>Input</p>
      }

      table={
         <p>Table</p>
      }
      />     
   )
}


export default Farming