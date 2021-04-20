import React from 'react';
import { useRef, useEffect } from 'react';
import s from './Canvas.module.css';

const Canvas = () => {

    const CanvasRef = useRef(null);

    useEffect(() => {
        const WIDTH = 1000;
        const HEIGHT = 500;
        const DPI_WIDTH = WIDTH * 2;
        const DPI_HEIGHT = HEIGHT * 2;
        
        const CanvasDOM = CanvasRef.current;

        const context = CanvasDOM.getContext('2d');
        CanvasDOM.width = DPI_WIDTH;
        CanvasDOM.height = DPI_HEIGHT;

        context.strokeStyle = 'green';
        context.lineWidth = 2;
        context.lineTo(0, DPI_HEIGHT);
        context.lineTo(DPI_WIDTH, 0);
        context.stroke();
    
    }, []);

    return ( <div className={s.div}>
            <canvas ref={CanvasRef} className={s.Canvas}>
            </canvas>
            </div>
    )
}

export default Canvas;