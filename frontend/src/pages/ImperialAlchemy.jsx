import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';
import {GET,POST} from '../api/apiAdapter';
import PageLayout from "./PageLayout";



function ImperialAlchemy() {
   const [data,setData] = useState(null)
   const URL="/alchemy"

   useEffect(() => {
      GET(URL).then((response) => {
         setData(response.data)
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