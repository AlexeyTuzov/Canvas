import React from 'react';
import s from './Toast.module.css';

const Toast = (props) => {
    return (
        <div className={s.Toast}>
            <div>{props.statusText} {props.status}</div>
            <div>{props.message}</div>
        </div>
            
        
    )
}

export default Toast;