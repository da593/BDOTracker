import {React} from 'react';
import ContactsPopup from './ContactsPopup';
import FeedbackPopup from './FeedbackPopup';

/*If PopupLayout is visible by button click, return the corresponding Popup component */
const PopupFactory = ({popupType}) => {

    switch (popupType) {
        case "contacts":
            return <ContactsPopup/>
        case "feedback":
            return <FeedbackPopup/>
        default:
            return <div>Error</div>
    }

}

export default PopupFactory