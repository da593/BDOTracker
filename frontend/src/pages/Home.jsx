import React,{useState,useEffect} from "react";
import axios from 'axios';
import {GET,POST} from '../api/apiAdapter';
import PageLayout from "./PageLayout";




function Home() {
   const URL="/home"
   const descrArr=["BDO Tracker is a tool to help Black Desert Online players keep track of various activities including life skill profitability and pearl market sales.",
   <br/> ,
   "If you have any questions, suggestions, or feedback please let me know!"]
   return (
      <>
      <PageLayout
      title={"Home"}
      description={<>BDO Tracker is a tool to help Black Desert Online players keep track of various activities including life skill profitability and pearl market sales.<br/>
      If you have any questions, suggestions, or feedback please let me know!</>}
      />
      
      </>
   )
}


export default Home