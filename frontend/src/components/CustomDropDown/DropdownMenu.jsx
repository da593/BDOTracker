import React from 'react';
import {getDropDownLinks} from '../Header/HeaderLinks';

const DropdownMenu = ({onClick,isClicked}) => {
    
    return (
        <div className="dropdown-menu" style={ isClicked ? {display:"block"} : {display:"none"}} >
            {getDropDownLinks({onClick})}
        </div>
    )
}

export default DropdownMenu