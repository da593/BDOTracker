import React from "react";
import PageManager from "./PageManager";
import FarmingInput from "../components/Input/FarmingInput";


function Farming() {

   const endpoint="/farming"
   
   return (
      <PageManager          
      title={"Magical Seed Farming"}
      description={"Determine marketplace,vendor, and crate profit from harvesting/breeding magical crops"}
      endpoint={endpoint}
      input={
         <FarmingInput/>
      }
      />     
   )
}


export default Farming