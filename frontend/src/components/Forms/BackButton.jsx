import {React} from 'react';
import {BsArrow90DegLeft} from 'react-icons/bs'

//This button returns the user to the initial menu of the feedback popup
const BackButton = ({setFeedbackType}) => {
    return (
        <div className="bottom-window">
            <button className="back-button" onClick={ () => setFeedbackType("feedback")}><BsArrow90DegLeft/></button>
        </div>
        
    )
}

export default BackButton