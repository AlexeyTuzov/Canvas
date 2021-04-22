import { useState } from 'react';

export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);

    const isAuthenticated = !!token;

    const login = (jwt, id) => {
        setToken(jwt);
        setUserID(id);

        localStorage.setItem('userID', id);
        localStorage.setItem('token', jwt);
    };

    const logout = () => {
        setToken(null);
        setUserID(null);
      

        localStorage.removeItem('userID');
        localStorage.removeItem('token');
    }

    return { login, logout, token, userID, isAuthenticated }
}