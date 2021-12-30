import React from 'react';
import {BsCaretDownFill} from "react-icons/bs";

/*On button click calls parent function */
const DropdownButton = ({onClick}) => {
    return (
        <button className="dropdown-button" onClick={onClick}> 
            Life skills <BsCaretDownFill className="dropdown-icon"/>
        </button>
    )
}

export default DropdownButton