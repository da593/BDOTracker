import React from 'react';
import HeaderWrapper from '../components/wrappers/HeaderWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import FooterWrapper from '../components/wrappers/FooterWrapper';

const PageManager = (props) => {


    return (
        <>
        <HeaderWrapper/>
        <ContentWrapper>
            <>
            <div>
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
        <FooterWrapper/>
        </>
    )  
}

export default PageManager