import React from 'react';
import logo from './../../assets/book.png'

const Logo = (props) => {
    return (
        <div className ="logo-container">
        <img src={logo} alt="books" />
    <span className ="level-title">LEVEL {props.level}</span>
    </div>
    )
}

export default Logo