import React from "react";
import PageManager from "./PageManager";


const gradeColorMap =  {
   1: 'white',
   2: '#0391c4',
   3: '#f6c232',
   4: '#ff8315',
   // etc 
 }

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