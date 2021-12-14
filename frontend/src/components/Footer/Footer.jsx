import React from 'react';
import ContactsButton from './ContactsButton';
import FeedbackButton from './FeedbackButton';

//container for the Footer
const Footer = (props) => {


    return (
        
        <div className="Footer">
            <ContactsButton/>
            <FeedbackButton/>
        </div>
        
        );
    }
    
export default Footer;