import React from 'react';


//Hovering button on the side of the page
const FeedbackSideButton = ({ openPopup}) => {
  
    return (
        <button className="side-button" onClick={openPopup} type="feedback"> 
            Feedback
        </button>
    )
}

export default FeedbackSideButton