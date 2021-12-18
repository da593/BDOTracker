import {React} from 'react';
import ContactsPopup from './ContactsPopup';
import FeedbackPopup from './FeedbackPopup';


/*If PopupLayout is visible by button click, return the corresponding Popup component */
const PopupFactory = ({popupType, copyMsg, setCopiedStatus,feedbackType,setFeedbackType}) => {

    switch (popupType) {
        case "contacts":
            return <ContactsPopup copyMsg={copyMsg} setCopiedStatus={setCopiedStatus}/>
        case "feedback":
            return <FeedbackPopup feedbackType={feedbackType} setFeedbackType={setFeedbackType}/>
        default:
            return <div>Error</div>
    }

}

export default PopupFactory