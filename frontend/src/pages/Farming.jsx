import React,{useState,useEffect} from "react";
import axios from 'axios';
import {GET,POST} from '../api/apiAdapter';
import PageLayout from "./PageLayout";


const URL="/farming"



function Farming() {
   const [data,setData] = useState(null)
  


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