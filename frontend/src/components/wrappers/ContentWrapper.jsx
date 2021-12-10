import React from 'react';

//Wrap content between header and footer
const ContentWrapper = (props) => {
    return (
        <div className="ContentWrapper">
            {props.children}
        </div>
    )
}

export default ContentWrapper