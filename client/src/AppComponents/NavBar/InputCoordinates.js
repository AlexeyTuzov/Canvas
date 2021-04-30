import React from 'react';
import s from './NavBar.module.css';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import Toast from '../AuthPage/Toast.js';

const InputCoordinates = () => {

    const { submitCoordinates } = useContext(AppContext);

    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [toastData, setToastData] = useState('');

    const popup = data => {
        if (data.message) return <Toast {...data} />
    }

    function buttonDrawClick() {
        if (x && y) {
            submitCoordinates(x, y);
            setX('');
            setY('');
            setToastData('');
        } else {
            setToastData('');
            console.log('toastData after shutdown', toastData);
            setToastData({ message: 'X or Y has no entree!' });
            console.log('toastData after being set with message', toastData);
            
        }
    }

    return (
        <>
            {popup(toastData)}
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
                    onClick={() => buttonDrawClick()}>Draw</button>
            </div>
        </>
    );

}

export default InputCoordinates;