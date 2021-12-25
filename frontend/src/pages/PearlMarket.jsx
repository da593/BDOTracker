import React from "react";
import PageManager from "./PageManager";

function PearlMarket() {
   const endpoint = "/pearlmarket"
   
   return (
      <PageManager          
      title={"Pearl Market"}
      description={"Track the amount of pearl item sales for various periods to determine what is hot"}
      endpoint={endpoint}
      
      />

   )
}


export default PearlMarket