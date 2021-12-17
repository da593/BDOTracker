import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const ContactsSideButton = ({openPopup}) => {
  
    return (
        <button className="side-button" onClick={openPopup} type="contacts"> 
            Contacts
        </button>
    )
}

export default ContactsSideButton