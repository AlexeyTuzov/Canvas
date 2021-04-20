import React from 'react';
import s from './NavBar.module.css';
import InputCoordinates from './InputCoordinates.js'

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <InputCoordinates />
        </div>
    )
}

export default NavBar;