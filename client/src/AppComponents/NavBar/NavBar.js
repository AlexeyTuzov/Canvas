import React from 'react';
import s from './NavBar.module.css';
import InputCoordinates from './InputCoordinates.js';
import Coordinate from './Coordinate.jsx';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';


const NavBar = () => {

    const { coordinatesArray, deleteAllCoordinates } = useContext(AppContext);

    let coordinatesColumn = coordinatesArray.map( item => {
        return <Coordinate {...item} />
    });

    return (
        <div className={s.NavBar}>
            <InputCoordinates />
            {coordinatesColumn}
            <button className={s.DeleteButton}
                onClick={() => deleteAllCoordinates()}>
                Delete All Coordinates
            </button>
        </div>
    )
}

export default NavBar;