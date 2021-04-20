import React from 'react';
import s from './Content.module.css';
import Canvas from './Canvas/Canvas.js';

const Content = () => {
    return (
        <div className={s.Content}>
            <Canvas />
        </div>
    )
}

export default Content;