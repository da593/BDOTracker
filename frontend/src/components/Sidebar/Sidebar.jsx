import React from 'react';
import ContactsSideButton from '../Sidebar/ContactsSideButton';
import FeedbackSideButton from '../Sidebar/FeedbackSideButton';
//container for the Sidebar
const Sidebar = () => {
    return (
        
        <div className="Sidebar">
            <ContactsSideButton/>
            <FeedbackSideButton/>
        </div>
        
        );
    }
    
export default Sidebar;