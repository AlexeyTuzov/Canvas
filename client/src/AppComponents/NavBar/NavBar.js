import React from 'react';
import s from './NavBar.module.css';
import InputCoordinates from './InputCoordinates.js';
import Coordinate from './Coordinate.jsx';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';


const NavBar = () => {

    const { coordinatesArray} = useContext(AppContext);

    coordinatesArray.map(item => <Coordinate props={item} />);
  

    return (
        <div className={s.NavBar}>
            <InputCoordinates />
            <button className = {s.DeleteButton}>
                Delete All Coordinates
            </button>
        </div>
    )
}

export default NavBar;