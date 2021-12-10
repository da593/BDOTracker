import React,{useState,useEffect} from "react";
import {GET,POST} from '../api/apiAdapter';
import PageLayout from "./PageLayout";

const URL="/pearlmarket"


function PearlMarket() {
   const [data,setData] = useState(null)
  


   return (
      <PageLayout          
      title={"Pearl Market"}
      description={"Track the amount of pearl item sales for various periods to determine what is hot"}
      input={
         <p>Input</p>
      }

      table={
         <p>Table</p>
      }
      />

   )
}


export default PearlMarket