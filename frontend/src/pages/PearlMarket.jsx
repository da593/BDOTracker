import React from "react";
import PageManager from "./PageManager";




function PearlMarket() {
   const endpoint = "/pearlmarket"
   
   return (
      <PageManager          
      title={"Pearl Market"}
      description={"Track the amount of pearl item sales for various periods to determine what is hot"}
      endpoint={endpoint}
      input={
         <form>
            <div>

               <div>
               <label>Filter Item Type
                  <select>
                        <option value="all">All</option>
                        <option value="Male Set">Male Apparel (Set)</option>
                        <option value="Female Set">Female Apparel (Set)</option>
                        <option value="Male Individual">Male Apparel (Individual)</option>
                        <option value="Female Individual">Female Apparel (Individual)</option>
                        <option value="Class Set">Class-based Apparel (set)</option>
                        <option value="functional">Functional</option>
                        <option value="mount">Mount</option>
                        <option value="pet">Pet</option>
                  </select>
               </label>
               </div>
            </div>
        </form>

      }
      />

   )
}


export default PearlMarket