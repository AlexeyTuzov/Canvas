import { useState } from 'react';

export const useCanvas = () => {

    const [coordinatesArray, setCoordinatesArray] = useState([]);

    const submitCoordinates = (x, y) => setCoordinatesArray(prev => [...prev, { x, y }]);

    function drawArray(coordinatesArray) {
        for (const [x, y] of coordinatesArray) {

        }
    }

    const deleteAllCoordinates = () => setCoordinatesArray([]);
    
    return { coordinatesArray, submitCoordinates, drawArray, deleteAllCoordinates }
}