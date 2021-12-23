import React from "react";
import PageManager from "./PageManager";


function ImperialAlchemy() {
   const endpoint="/alchemy"


   return (
      <PageManager          
      title={"Imperial Alchemy"}
      description={"Determine imperial delivery profit from various elixirs based on marketplace value or total revenue"}
      input={
         <p>Input</p>
      }
      endpoint={endpoint}
      table={
         <p>Table</p>
      }
      />     
   )
}


export default ImperialAlchemy