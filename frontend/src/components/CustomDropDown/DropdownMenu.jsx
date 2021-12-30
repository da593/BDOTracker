import React from 'react';
import {getDropDownLinks} from '../Header/HeaderLinks';

//If the parent component state is clicked, then show the dropdown menu. If the link within the menu is click, close the menu.
const DropdownMenu = ({onClick,isClicked}) => {
    return (
        <div className="dropdown-menu" style={ isClicked ? {display:"block"} : {display:"none"}} >
            {getDropDownLinks({onClick})}
        </div>
    )
}

export default DropdownMenu