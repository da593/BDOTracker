import React,{useState} from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';


/*
Manages the state and style of the dropdown button and menu in the header
 */
const DropDown = () => {
    const [isClicked,setClick] = useState(false)

    function handleButtonClick() {
        setClick(!isClicked)
    }


    //Pass handleButtonClick function call so child can call and update state in parent
    return (
        <div className="dropdown-container">
            <DropdownButton onClick={handleButtonClick}/>
            <DropdownMenu onClick={handleButtonClick} isClicked={isClicked}/>
        </div>
    )

}

export default DropDown