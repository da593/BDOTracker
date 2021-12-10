import React from 'react';
import {getDropDownLinks} from '../Header/HeaderLinks';

//Child component: Dropdown div in DropDown component. The state of the div is dependent on if the button is clicked.

const DropDownMenu = ({isClicked,onClick})  => {
    
    return (
        <div className="dropdown-menu" style={ isClicked ? {display:"block"} : {display:"none"}} >
            {getDropDownLinks({onClick})}
        </div>
    )
}

export default DropDownMenu