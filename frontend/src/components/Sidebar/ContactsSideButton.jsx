import React from 'react';


//Hovering button on the side of the page
const ContactsSideButton = ({openPopup}) => {
  
    return (
        <button className="side-button" onClick={openPopup} type="contacts"> 
            Contacts
        </button>
    )
}

export default ContactsSideButton