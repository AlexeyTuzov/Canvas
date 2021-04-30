import React from 'react';
import s from './NavBar.module.css';

const Coordinate = (props) => {
    console.log('props inside the Coordinate:', props);
    return (
<div className={s.Coordinate}>
    X: {props.x} Y: {props.y}
</div>
    );
}

export default Coordinate;