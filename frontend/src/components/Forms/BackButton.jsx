import {React} from 'react';
import {BsArrow90DegLeft} from 'react-icons/bs'

const BackButton = ({setFeedbackType}) => {
    return (
        <div className="bottom-window">
            <button className="back-button" type="feedback" onClick={setFeedbackType}><BsArrow90DegLeft/></button>
        </div>
        
    )
}

export default BackButton