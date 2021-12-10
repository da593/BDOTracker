import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const ContactsButton = ({ onClick}) => {
  
    return (
        <button className="footer-button" onClick={onClick}> 
        Life skills
        </button>
    )
}

export default ContactsButton