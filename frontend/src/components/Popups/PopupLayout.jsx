import React from 'react';

/*Popup layout maintains the state,style of the popups, and all the buttons that cause a popup to show
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