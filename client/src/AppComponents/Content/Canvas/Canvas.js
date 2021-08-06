import React from 'react';
import { useRef, useEffect, useContext } from 'react';
import s from './Canvas.module.css';
import { AppContext } from '../../context/AppContext.js';

const Canvas = () => {

    const { coordinatesArray, drawArray } = useContext(AppContext);

    const CanvasRef = useRef(null);
    
    useEffect(() => {
        
        const WIDTH = 1000;
        const HEIGHT = 500;
        const DPI_WIDTH = WIDTH * 2;
        const DPI_HEIGHT = HEIGHT * 2;
        const context = CanvasRef.current.getContext('2d');
        CanvasRef.current.width = DPI_WIDTH;
        CanvasRef.current.height = DPI_HEIGHT;
        console.log('context,', context);
    
    }, []);

    return ( <div className={s.div}>
            <canvas ref={CanvasRef} className={s.Canvas}>
            </canvas>
            </div>
    )
}

export default Canvas;