import React,{useState,useEffect} from "react";
import axios from 'axios';
import {GET,POST} from '../api/apiAdapter';
import PageLayout from "./PageLayout";

const URL="/cooking"


function ImperialCooking() {
   const [data,setData] = useState(null)

   useEffect(() => {
      GET(URL).then((response) => {
         setData(response.data)
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