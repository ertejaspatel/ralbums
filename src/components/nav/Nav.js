import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <ul className="nav-menu">
            <li>
                <Link to="/">Home</Link>
            </li>    
            <li>
                <Link to="/albums">Albums</Link>
            </li>
        </ul>
    )
}

export default Nav;