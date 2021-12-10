import React,{useState} from 'react';
import ContactsButton from './ContactsButton';
import ContactsMenu from './ContactsMenu';

const ContactsPopup = () => {
    const [isClicked,setClick] = useState(false)

    function handleButtonClick() {
        setClick(!isClicked)
    }

    //Pass onClick attribute as a function call so child can call and update state in parent
    return (
        <div className="dropdown-container">
            <ContactsButton onClick={handleButtonClick} isClicked={isClicked} />
            <ContactsMenu onClick={handleButtonClick} isClicked={isClicked} />
        </div>
    )
}
    
    export default ContactsPopup