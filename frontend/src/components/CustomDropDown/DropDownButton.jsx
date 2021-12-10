import React from 'react';
import {BsCaretDownFill} from "react-icons/bs";

//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const DropDownButton = ({ onClick}) => {
  
    return (
        <button className="dropdown-button" onClick={onClick}> 
        Life skills <BsCaretDownFill className="dropdown-icon"/>
        </button>
    )
}

export default DropDownButton