import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'


const Nav = () => {
    return (
    <nav className ="nav">
        <Logo level={'0'} />
        <ul className ="nav-container">
            <NavLink to='/library'>Library</NavLink>
            <NavLink to='/training'>Training</NavLink>
            <NavLink to='/learn'>Learn</NavLink>
            
            
        </ul>
    </nav>
    )

}

export default Nav;