import React from 'react';
import {SingleLinks} from './PageLinks';
import ToggleDarkMode from './ToggleDarkMode';
import DropDown from './Dropdown';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-justify-left">
                <p className="navbar-brand">BDO<br/>Tracker</p>
            </div>
            <div className="navbar-justify-center">
                <ul className="navbar-list">
                    {SingleLinks.map((item,index)=> {
                        return (
                            <li className="navbar-item" key={index} >
                                <NavLink to={item.url} className={({ isActive }) => isActive ? "current-page" : "navbar-link"}>
                                {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
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