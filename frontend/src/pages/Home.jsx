import React,{useState,useEffect} from "react";
import PageLayout from "./PageManager";


function Home() {
   const endpoint = "/home"

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