import { createContext } from 'react';

function noop() { }

export const AppContext = createContext( {
coordinatesArray: [],
deleteCoordinates: noop,
submitCoordinates: noop,
drawArray: noop,
deleteAllCoordinates: noop
});