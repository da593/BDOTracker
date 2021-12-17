import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const FeedbackSideButton = ({ openPopup}) => {
  
    return (
        <button className="side-button" onClick={openPopup} type="feedback"> 
            Feedback
        </button>
    )
}

export default FeedbackSideButton