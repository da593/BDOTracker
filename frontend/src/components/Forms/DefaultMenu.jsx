import {React} from 'react';
import {BsFillLightbulbFill} from 'react-icons/bs'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {BsFillExclamationCircleFill} from 'react-icons/bs'

//The initial menu when user clicks on the feedback buttons
const DefaultMenu = ({setFeedbackType}) => {

    return (
        <>
        <ul className="popup-bottom-list">
            <li><BsFillEmojiSmileFill className="smile"/><button className="feedback-button" onClick={ () => setFeedbackType("like")}> I liked something</button></li>
            <li><BsFillLightbulbFill className="lightbulb"/><button className="feedback-button"  onClick={ () =>setFeedbackType("suggestion")}> I have a suggestion</button> </li>
            <li><BsFillExclamationCircleFill className="exclamation"/><button className="feedback-button" onClick={ () =>setFeedbackType("problem")}> There is a problem</button></li>
        </ul> 
        
        </>
    )
}

export default DefaultMenu