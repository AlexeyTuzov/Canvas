import React from 'react';
import s from './NavBar.module.css';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.js';

const InputCoordinates = (props) => {

    const { submitCoordinates } = useContext(AppContext);

    const [x, setX] = useState('');
    const [y, setY] = useState('');

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