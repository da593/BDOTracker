import React from 'react';
import {DropDownLinks} from './PageLinks';
import { NavLink } from "react-router-dom";

const DropDownMenu = ({bool})  => {
    
    return (
        <div className="dropdown-menu" style={ bool ? {display:"block"} : {display:"none"}}>
            {DropDownLinks.map((item,index)=> {
                return (
                    <li className="navbar-item" key={index}>
                        <NavLink to={item.url} className={({ isActive }) => isActive ? "current-page" : "navbar-link"}>
                        {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </div>
    )
}

export default DropDownMenu