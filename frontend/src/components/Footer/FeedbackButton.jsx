import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const FeedbackButton = ({ openPopup}) => {

  
    return (
        <button className="footer-button" onClick={openPopup} type="feedback"> 
            Feedback
        </button>
    )
}

export default FeedbackButton