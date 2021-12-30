import React,{useState} from 'react';
import {BsFillXCircleFill} from "react-icons/bs";
import PopupFactory from './PopupFactory';
import SidebarWrapper from '../wrappers/SidebarWrapper';
import FooterWrapper from '../wrappers/FooterWrapper';

/*
Popup Containers maintains the state and all the buttons that cause a popup to show
*/
const PopupContainer = () => {

    const [visible,setVisibility] = useState(false);
    const [popupType,setType] = useState("")
    const [feedbackType,setFeedback] = useState("")
    const [copyMsg,setCopiedStatus] = useState("")

    const closePopup = () => {
        setVisibility(false)
        setCopiedStatus("")
        setFeedback("")
    }

    const openPopup = (event) => {
        setType( event.currentTarget.getAttribute("type") )
        setVisibility(true)
        
    }

    function setFeedbackType(type) {
        setFeedback( type)
    }
    

    return (
        <>
        <div className="popup-container" style={{ display: visible ? 'block' : 'none' }}>
            <div className="popup-content">
                <div className="top-window">
                    <button className="close-button" onClick={closePopup}><BsFillXCircleFill /></button>
                </div>
                <PopupFactory popupType={popupType} copyMsg={copyMsg} setCopiedStatus={setCopiedStatus} feedbackType={feedbackType} setFeedbackType={setFeedbackType}/>
            </div>
        </div>
        <FooterWrapper openPopup={openPopup}/>
        <SidebarWrapper openPopup={openPopup}/>
        </>
    )
}

export default PopupContainer