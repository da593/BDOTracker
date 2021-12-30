import React from 'react';

/*
Popup layout maintains the style of the popups
*/

const PopupLayout = (props) => {
    return (
        <>
        <div className="popup-header">
            <p>{props.buttonName}</p>
            <p className="popup-header-description"> <br />{props.popupDescription}</p>
        </div>
        <div className="popup-bottom">
            {props.popupBottom}
        </div>
        </>
    )
}

export default PopupLayout