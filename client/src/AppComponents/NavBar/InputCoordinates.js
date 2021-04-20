import React from 'react';
import s from './NavBar.module.css';
import { useState } from 'react';

const InputCoordinates = (props) => {

    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    const submitCoordinates = (x, y) => {
        return [x, y];
    }

    return (
        <div>
            <input className={s.InputField}
                placeholder='insert X'
                onChange={event => setX(event.target.value)}
                value={x}>
            </input>
            <input className={s.InputField}
                placeholder='insert Y'
                onChange={event => setY(event.target.value)}
                value={y}>
            </input>
            <button className={s.ButtonDraw}
                onClick={() => submitCoordinates(x, y)}>Draw</button>
        </div>
    );

}

export default InputCoordinates;