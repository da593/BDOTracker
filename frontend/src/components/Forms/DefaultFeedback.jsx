import {React} from 'react';
import {BsFillLightbulbFill} from 'react-icons/bs'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {BsFillExclamationCircleFill} from 'react-icons/bs'

const DefaultFeedback = ({setFeedbackType}) => {

    return (
        <>
        <ul className="popup-bottom-list">
            <li><BsFillEmojiSmileFill className="smile"/><button className="feedback-button" type="like" onClick={setFeedbackType}> I liked something</button></li>
            <li><BsFillLightbulbFill className="lightbulb"/><button className="feedback-button" type="suggestion" onClick={setFeedbackType}> I have a suggestion</button> </li>
            <li><BsFillExclamationCircleFill className="exclamation"/><button className="feedback-button" type="problem" onClick={setFeedbackType}> There is a problem</button></li>
        </ul> 
        
        </>
    )
}

export default DefaultFeedback