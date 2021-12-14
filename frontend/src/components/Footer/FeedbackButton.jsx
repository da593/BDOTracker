import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const FeedbackButton = ({ onClick}) => {
  
    return (
        <button className="footer-button" onClick={onClick}> 
            Feedback
        </button>
    )
}

export default FeedbackButton