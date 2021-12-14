import React,{useState} from 'react';
import {BsCaretDownFill} from "react-icons/bs";
import {getDropDownLinks} from '../Header/HeaderLinks';

/*
Manages the state and style of the dropdown button and menu in the header
 */
const DropDown = () => {
    const [isClicked,setClick] = useState(false)

    function handleButtonClick() {
        setClick(!isClicked)
    }


    //Pass onClick attribute as a function call so child can call and update state in parent
    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={handleButtonClick}> 
                Life skills <BsCaretDownFill className="dropdown-icon"/>
            </button>
            <div className="dropdown-menu" style={ isClicked ? {display:"block"} : {display:"none"}} >
                {getDropDownLinks({handleButtonClick})}
            </div>
        </div>
    )

}

export default DropDown