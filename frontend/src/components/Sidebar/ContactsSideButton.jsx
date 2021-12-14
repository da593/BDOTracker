import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const ContactsSideButton = ({ onClick}) => {
  
    return (
        <button className="side-button" onClick={onClick}> 
            Contacts
        </button>
    )
}

export default ContactsSideButton