import React from 'react';
import { NavLink } from "react-router-dom";

//const URL = process.env.REACT_APP_ROUTER
//Getters for the various page links
export function getSingleLinks() {
    return (
        SingleLinks.map((item,index)=> {
            return (
                <li className="navbar-item" key={index}>
                    <NavLink to={item.url} className={({ isActive }) => isActive ? "current-page-link" : "navbar-link"}>
                    {item.title}
                    </NavLink>
                </li>
            )
        })
    )}

//Use onClick function from DropDown component (2 components up). Can use Redux here to efficiently pass state since there is an un-necessary intermediate component.
export function getDropDownLinks({onClick}) {
    return (
        DropDownLinks.map((item,index)=> {
            return (
                <li className="navbar-item" key={index}>
                    <NavLink to={item.url} className={({ isActive }) => isActive ? "current-page-link" : "navbar-link"} onClick={onClick}>
                    {item.title}
                    </NavLink>
                </li>
            )
        })
    )}


//Array of JSON objects that map the URLs and name for all page links as NavLinks
export const SingleLinks = [

    {
        title:"Home",
        url:'/home',
        
    },
    
    {
        title:"Pearl Market",
        url:'/pearlmarket',
        
    },

]

export const DropDownLinks = [
    {
        title:"Imperial Cooking",
        url:'/cooking',
        cName:'navbar-link'
    },
    {
        title:"Imperial Alchemy",
        url:'/alchemy',
        cName:'navbar-link'
    },
    {
        title:"Magical Seed Farming",
        url:'/farming',
       
    },
]

