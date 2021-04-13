import { useState, useCallback } from 'react';

const storageName = 'userData';

export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);

    const login = useCallback( (jwt, id) => {
        setToken(jwt);
        setUserID(id);

        localStorage.setItem( 'userID', id) 
        localStorage.setItem( 'token', jwt) 
    }, []);

    const logout = () => {
        setToken(null);
        setUserID(null);

        localStorage.removeItem(storageName);
    }

    return { login, logout, token, userID }
}