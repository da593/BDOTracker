import React from 'react';


//Child component: When the DropDownButton is clicked, the DropDownMenu state is changed

const FeedbackSideButton = ({ onClick}) => {
  
    return (
        <button className="side-button" onClick={onClick}> 
            Feedback
        </button>
    )
}

export default FeedbackSideButton