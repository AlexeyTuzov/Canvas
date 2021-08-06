import React from 'react';
import s from './NavBar.module.css';

const Coordinate = (props) => {
    return (
<div className={s.Coordinate}>
    X: {props.x} Y: {props.y}
</div>
    );
}

export default Coordinate;