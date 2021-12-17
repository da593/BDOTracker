import React from 'react';
import ContactsSideButton from '../Sidebar/ContactsSideButton';
import FeedbackSideButton from '../Sidebar/FeedbackSideButton';
//container for the Sidebar
const Sidebar = ({openPopup}) => {
    return (
        
        <div className="Sidebar">
            <ContactsSideButton openPopup={openPopup}/>
            <FeedbackSideButton openPopup={openPopup}/>
        </div>
        
        );
    }
    
export default Sidebar;