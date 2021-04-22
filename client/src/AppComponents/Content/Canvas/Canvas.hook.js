import { useState } from 'react';

export const useCanvas = () => {

    const [coordinatesArray, setCoordinatesArray] = useState([]);

    const submitCoordinates = (x, y) => setCoordinatesArray( prev => [...prev, {x, y}] );

    const drawArray = () => {

        return;
    }

    return { coordinatesArray, submitCoordinates, drawArray }
}