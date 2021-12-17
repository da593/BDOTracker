import React from 'react';
import Footer from '../Footer/Footer'
//container for the header
const FooterWrapper = ({openPopup}) => {
    return (
        
        <div className="FooterWrapper">
            <Footer openPopup={openPopup}/>
        </div>
        
        );
    }
    
export default FooterWrapper;