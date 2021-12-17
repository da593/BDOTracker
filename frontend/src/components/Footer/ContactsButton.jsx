import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed
const ContactsButton = ({openPopup}) => {


  
    return (
        <button className="footer-button" onClick={openPopup} type="contacts"> 
            Contacts
        </button>
        
    )
}

export default ContactsButton