import React from 'react';
import ContactsButton from './ContactsButton';
import FeedbackButton from './FeedbackButton';


//container for the Footer
const Footer = ( {openPopup}) => {


    return (
        <div className="Footer">
            <ContactsButton openPopup={openPopup}/>
            <FeedbackButton openPopup={openPopup}/>
        </div>
        );
    }
    
export default Footer;