import React from 'react';
import s from './Toast.module.css';

const Toast = (props) => {
    return (
        <div className={s.Toast}>
            <div>{props.statusText ? props.statusText : null}
             {props.status ? props.status : null}</div>
            <div>{props.message}</div>
        </div>   
    )
}

export default Toast;