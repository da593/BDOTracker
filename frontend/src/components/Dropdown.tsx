import React,{useState} from 'react';
import DropDownButton from './DropDownButton';
import DropDownMenu from './DropDownMenu';

const DropDown = () => {
    const [isClicked,setClick] = useState(false)
    
    function handleButtonClick() {
        setClick(!isClicked)
    }

  
    //Pass onClick attribute as a function call so child can call and update state in parent
    return (
        <div className="dropdown-container">
            <DropDownButton onClick={handleButtonClick} isClicked={isClicked} />
            <DropDownMenu bool={isClicked}/>
        </div>
    )

}

export default DropDown