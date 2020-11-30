import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    const modeClassName = 'mode-container ' + props.modeClassName;
    return (
        <NavLink to={`/training/${props.path}`}>
            <div className={modeClassName}>
                <div className='mode-title-wrapper'>
                    <h2 className='mode-title'>
                        {props.modeTitle}
                    </h2>
                    <p className='mode-description'>{props.modeDescription}</p>
                </div>
                <div>
                    <img className='mode-img' src={props.img}></img>
                </div>
            </div>
        </NavLink>
    )
}
