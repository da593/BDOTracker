import React from "react";
import PageLayout from "./PageManager";


function Home() {
   const endpoint = "/home"
   console.log(endpoint)
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