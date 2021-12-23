import React from "react";
import PageManager from "./PageManager";



function Farming() {

   const endpoint="/farming"
   
   
   return (
      <PageManager          
      title={"Magical Seed Farming"}
      description={"Determine marketplace,vendor, and crate profit from harvest/breeding magical crops"}
      endpoint={endpoint}
      input={
         <p>Input</p>
      }
      />     
   )
}


export default Farming