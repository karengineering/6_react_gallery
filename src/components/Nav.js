import React from 'react';
import { NavLink } from "react-router-dom";

//stateless component
//match index.html
const Nav = (props) => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/birds'>Birds</NavLink></li>
        </ul>
    </nav>
);

export default Nav; 