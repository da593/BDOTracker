import React from "react";
import PageManager from "./PageManager";
import ImperialInput from "../components/Input/ImperialInput";

function ImperialCooking() {

   const endpoint="/cooking"

   return (
      <PageManager          
      title={"Imperial Cooking"}
      description={"Determine imperial delivery profit from various meals based on marketplace value or total revenue"}
      endpoint={endpoint}
      input={
         <ImperialInput/>
      }
      />     
   )
}


export default ImperialCooking