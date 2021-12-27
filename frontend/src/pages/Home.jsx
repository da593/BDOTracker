import React from "react";
import UpdateDescription from "../components/Updates/UpdateDescription";
import HeaderWrapper from '../components/wrappers/HeaderWrapper';
import PopupContainer from '../components/Popups/PopupContainer';
function Home() {

   const endpoint = "/home"
   return (

      
      <>
      <HeaderWrapper/>   
      <div className='home-container'>
         <p className="title">Home</p>
         <p className="description">
         BDO Tracker is a tool to help Black Desert Online players keep track of various activities including life skill profitability and pearl market sales.<br/>
         If you have any questions, suggestions, or feedback please let me know!
         </p>
         <h2 style={{textAlign:"center", color:"red",}}>Currently being refactored!!!</h2>
      </div>
      <div className="updates-container">
         <p className="update-title">Project Updates</p>
         <UpdateDescription 
            date="12/27" 
            version=" 2.30"  
            updateItem={
            <>
               <li>Project finalized</li>
               <li>Table data changes on input change</li>
            </>
            }
         /> 
         <UpdateDescription 
            date="12/25" 
            version=" 2.20"  
            updateItem={
            <>
               <li>Added all input fields</li>
               <li>Validate all input fields</li>
               <li>Added calculations base on inputs</li>
            </>
            }
         /> 
         <UpdateDescription 
            date="12/24" 
            version=" 2.12"  
            updateItem={
            <>
               <li>Completed Pearl Market table</li>
               
            </>
            }
         /> 
         <UpdateDescription 
            date="12/23" 
            version=" 2.11"  
            updateItem={
            <>
               <li>Added color code for item grade and mastery</li>
               <li>Add ability to sort columns</li>
            </>
            }
         /> 
         <UpdateDescription 
            date="12/22" 
            version=" 2.10"  
            updateItem={
            <>
               <li> Added tables to all required pages</li> 
               <li> Added search filter</li> 
               <li> Added ability to get updated data on demand</li> 
            </>
            }
         /> 
         <UpdateDescription 
            date="12/21" 
            version=" 2.05"  
            updateItem={
            <>
               <li> Added style to pearlmarket table</li> 
               <li> Added pagination to table</li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="12/18" 
            version=" 2.04"  
            updateItem={
            <>
               <li> Added contacts and feedback popup </li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="12/12" 
            version=" 2.03"  
            updateItem={
            <>
               <li> Added wrappers for sidebar, footer </li> 

            </>
            }
         /> 

         <UpdateDescription 
            date="12/08" 
            version=" 2.02"  
            updateItem={
            <>
               <li> Restyled the navigation bar</li> 
               <li> Added light and dark mode</li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="12/06" 
            version=" 2.02"  
            updateItem={
            <>
               <li> Add new API calls from backend</li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="12/04" 
            version=" 2.01"  
            updateItem={
            <>
               <li> Added environment variables and change config settings</li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="11/27" 
            version=" 2.00"  
            updateItem={
            <>
               <li> Added Docker to create micro-services for the frontend, backend, and database </li> 
            </>
            }
         /> 


         <UpdateDescription 
            date="9/24" 
            version=" 1.33"  
            updateItem={
            <>
               <li> Add tooltips to guide users </li> 
               <li> Added fixed contacts and feedback buttons on the side for QOL </li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="9/23" 
            version=" 1.32"  
            updateItem={
            <>
               <li> Add contact info and feedback submission </li> 
            </>
            }
         /> 

         <UpdateDescription 
            date="9/22" 
            version=" 1.31"  
            updateItem={
            <>
               <li>Add sorting to pearl table base on type</li>  
               <li>Ability for user to update pearl table</li> 
            </>
            }
         />   

         <UpdateDescription 
            date="9/21" 
            version=" 1.30"  
            updateItem={
            <>
               <li>Build the pearl item database for the pearl tab</li>  
            </>
            }
         />              
         
         <UpdateDescription 
            date="9/20" 
            version=" 1.22"  
            updateItem={
            <>
               <li>Finish farming tab (dynamic inputs and fetching updated data)</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/19" 
            version=" 1.21"  
            updateItem={
            <>
               <li>Added crate calculations to farming tab</li>
               <li>Validated all number inputs: no decimals or empty/NaN input</li>
               <li>Revamp input ui into a grid system for ease of positioning</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/18" 
            version=" 1.20"  
            updateItem={
            <>
               <li>Added market and vendor calculations for farming tab</li>
               <li>Added required inputs for farming tab</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/17" 
            version=" 1.15"  
            updateItem={
            <>
               <li>Reconfigured code for reusability</li>
               <li>Implemented Imperial Alchemy Page</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/16" 
            version=" 1.14"  
            updateItem={
            <>
               <li>Validated mastery and cp inputs</li>
               <li>Implemented an update button to retrieve updated items from database</li>
               <li>Table dynamically changes base price and in stock when update button is hit (Fetch/promises api)</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/15" 
            version=" 1.13"  
            updateItem={
            <>
               <li>Implemented profit and revenue for each cooking item</li>
               <li>Color coded profits</li>
               <li>Table dynamically changes revenue and profit based on mastery and cp</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/13" 
            version=" 1.12"  
            updateItem={
            <>
               <li>Reconfigured navigation bar to use Bootstrap 5</li>
               <li>Added color coding to cooking items based on item grade</li>
               <li>Added updates section to home page</li>
               <li>Added filtering based on user's profession level</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/11" 
            version=" 1.11"  
            updateItem={
            <>
               <li>Implemented filtering for the imperial cooking table</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/10" 
            version=" 1.10"  
            updateItem={
            <>
               <li> Send items that are cooking type to the table shown in the Imperial Cooking page</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/9" 
            version=" 1.01"  
            updateItem={
            <>
               <li> Reconfigured website to use Bootstrap 5 and DataTables</li>
            </>
            }
         />

         <UpdateDescription 
            date="9/8" 
            version=" 1.0"  
            updateItem={
            <>
               <li> Initalized Django framework</li>
               <li> Removed secret key and database information from settings file</li>
               <li> Created a navigation bar of the website </li>
            </>
            }
         />

         <UpdateDescription 
            date="8/28" 
            version="0.3"  
            updateItem={
            <>
               <li> Reconfigured database into class for ease of updating</li>
               <li> Added queries to only update volatile items, cooking, and alchemy to speed up updating database </li>
            </>
            }
         />

         <UpdateDescription 
            date="8/27" 
            version="0.2"  
            updateItem={
            <>
               <li> Retrieved all data from API (14,000 items)</li>
               <li> Added names to all items  </li>
            </>
            }
         />

         <UpdateDescription 
            date="8/24" 
            version="0.1"  
            updateItem={
            <>
               <li>Project initialized</li>
               <li>Create a script to retrieve data from API </li>
               <li>Built a Mysql database</li>
            </>
            }
         />
      </div>
      
      <PopupContainer/>
   </>
   )
}


export default Home