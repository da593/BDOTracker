import React from 'react';
import {getSingleLinks} from './HeaderLinks';
import ToggleDarkMode from '../CustomLightModeButton/ToggleDarkMode';
import DropDown from '../CustomDropDown/Dropdown';

//Navigation Bar component and the structure and style
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-justify-left">
                <p className="navbar-brand">BDO<br/>Tracker</p>
            </div>
            <div className="navbar-justify-center">
                <ul className="navbar-list">
                    {getSingleLinks()}
                <DropDown/>
                    
                </ul>
                
            </div>
            <div className="navbar-justify-right">
                <ToggleDarkMode/>
            </div>
            
        </div>
        );
    }

export default NavBar