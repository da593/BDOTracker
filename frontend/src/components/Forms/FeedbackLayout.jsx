import {React,useState} from 'react';
import { addFeedback } from '../../api/apiClient';
import BackButton from './BackButton';

/*
Manages the state and style of the feedback form 
Calls POST method to backend with feedback data from user
*/
const FeedbackLayout = ({setFeedbackType,prompt,feedbackType}) => {
    const [text,setText] = useState("")
    const [isDisabled,setDisabled] = useState(true)

    function postData() {
        
        if (!isDisabled) {
            const data = {"feedback_type":feedbackType,"feedback":text}
            addFeedback(data).then((response)=> {
                if (response.status === 201) {
                    return setFeedbackType("submit")
                }
                else {
                    return setFeedbackType("error")
                }
            })
        }   
    }

    function checkLength() {
        var withoutSpace = text.replace(/ /g,"");
        if (withoutSpace.length < 10 || withoutSpace.length > 500) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }

    }

    function getLength() {
        return text.replace(/ /g,"").length
    }

    return (
        <div className="flex-bottom">
            <BackButton setFeedbackType={setFeedbackType}/>
            <div className="bottom-prompt">
                {prompt}
            </div>
            <div>
                <textarea 
                type="text"
                placeholder={"Enter a minimum of 10 characters (Max 500)"} 
                spellCheck={true} 
                value={text}
                
                onChange={e => {
                    setText(e.target.value)
                    checkLength()
                }}
                />
            </div>
            <div className="text-length">
                <p>{getLength()} characters {isDisabled ? "\(10-500 characters only!\)" : ""}</p> 
            </div>
            <button className="submit-button"  onClick={() => postData()} disabled={isDisabled}>Submit</button>
        </div>

    )
}

export default FeedbackLayout