import React from 'react';
import {BsCaretDownFill} from "react-icons/bs";

const DropDownButton = ({ onClick,isClicked}) => {
  
    return (
        <button className="dropdown-button" onClick={onClick}> 
        Life skills <BsCaretDownFill className="dropdown-icon"/>
        </button>
    )
}

export default DropDownButton