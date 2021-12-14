import React,{useState} from 'react';
import {BsFillXCircleFill} from "react-icons/bs";
import ContactsButton from './ContactsButton';
import FeedbackButton from './FeedbackButton';


/*Popup layout maintains the state,style of the popups, and all the buttons that cause a popup to show
*/

const PopupLayout = (props) => {

    const [visible,setVisibility] = useState(false);

    const closePopup = () => {
        setVisibility(false)
    }

    const openPopup = () => {
        setVisibility(true)
    }

    return (
        <div className="popup-container" style={{ display: visible ? 'block' : 'none' }}>
            <div className="popup-content">
                <div className="top-window">
                    <button className="close-button" onClick={() => closePopup()}><BsFillXCircleFill /></button>
                </div>
                <div className="popup-header">
                    <p>{props.buttonName}</p>
                    <p className="popup-header-description"> <br />{props.popupDescription}</p>
                </div>
                <div className="popup-bottom">
                    {props.popupBottom}
                </div>
            </div>
        </div>
    )
}

export default PopupLayout