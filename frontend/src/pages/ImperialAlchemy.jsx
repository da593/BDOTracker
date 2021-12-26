import React from "react";
import PageManager from "./PageManager";
import ImperialInput from "../components/Input/ImperialInput";

function ImperialAlchemy() {
   const endpoint="/alchemy"


   return (
      <PageManager          
      title={"Imperial Alchemy"}
      description={"Determine imperial delivery profit from various elixirs based on marketplace value or total revenue"}
      endpoint={endpoint}
      input={
         <ImperialInput/>
      }
      />     
   )
}


export default ImperialAlchemy