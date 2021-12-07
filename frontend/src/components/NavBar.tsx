import React from 'react';
import {SingleLinks,DropDownLinks} from './PageLinks';
import ToggleDarkMode from './ToggleDarkMode';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-justify-left">
                <h3>BDO<br/>Tracker</h3>
            </div>
            <div className="navbar-justify-center">
                <ul className="navbar-list">
                    {SingleLinks.map((item)=> {
                        return (
                            <li className="navbar-item">
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <NavDropdown className="dropdown-button" title="Life skills "> 
                            {DropDownLinks.map((item)=> {
                                return (
                                    <Dropdown.Item className={item.cName} href={item.url}>
                                        {item.title}
                                    </Dropdown.Item>
                                )
                            })}
                    </NavDropdown>
                </ul>

            </div>
            <div className="navbar-justify-right">
                <ToggleDarkMode/>
            </div>
        </div>
        
        );
    }

export default NavBar