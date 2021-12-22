import React from 'react';
import HeaderWrapper from '../components/wrappers/HeaderWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PopupContainer from '../components/Popups/PopupContainer';

const PageManager = (props) => {
    

    return (
        <>
        <HeaderWrapper/>
        <ContentWrapper>
            <>
            <div className='title-container'>
                <p className="title">
                    {props.title}
                </p>
                <p className="description">
                    {props.description}
                </p>
            </div>
            <div className="input-grid">
                {props.input}
            </div>
            <div className="table-container">
                {props.table}
            </div>
            </>
        </ContentWrapper>
        <PopupContainer/>
        </>
    )  
}

export default PageManager