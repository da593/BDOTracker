import React from 'react';
import {getSingleLinks} from './HeaderLinks';
import ToggleDarkMode from '../CustomLightModeButton/ToggleDarkMode';
import DropDown from '../CustomDropDown/Dropdown';
import { NavLink
 } from 'react-router-dom';
//Navigation Bar component and the structure and style
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-justify-left">
                <NavLink to='/home' className="navbar-brand">
                    BDO<br/>Tracker
                </NavLink>
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