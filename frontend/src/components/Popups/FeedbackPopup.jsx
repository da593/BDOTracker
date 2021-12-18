import {React} from 'react';
import PopupLayout from './PopupLayout';
import FeedbackFactory from '../Forms/FeedbackFactory';

/*Implements the content of the popup */
const FeedbackPopup = ({feedbackType,setFeedbackType}) => {



    let defaultProps = {
        buttonName:"Feedback",
        popupDescription:"Have a suggestion? Want to give feedback? Let me know!",
        popupBottom: 
            <FeedbackFactory feedbackType={feedbackType} setFeedbackType={setFeedbackType}/> 
    }


    return (
        <PopupLayout {...defaultProps}/>
    )
}


export default FeedbackPopup

