import {React} from 'react';
import PopupLayout from './PopupLayout';


/*Implements the content of the popup */

const FeedbackPopup = () => {
  
    let props = {
        buttonName:"Feedback",
        popupDescription:"Have a suggestion? Want to give feedback? Let me know!",
        popupBottom: 
            <ul className="popup-bottom-list">
                <li>I liked something</li>
                <li>I have a suggestion</li>
                <li>There is a problem</li>
            </ul>
        
    }

    return (
        <PopupLayout {...props}/>
    )
}


export default FeedbackPopup

