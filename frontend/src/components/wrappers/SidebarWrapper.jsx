import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
//container for the Sidebar
const SidebarWrapper = ({openPopup}) => {
    return (
        
        <div className="SidebarWrapper">
            <Sidebar openPopup={openPopup}/>
        </div>
        
        );
    }
    
export default SidebarWrapper;