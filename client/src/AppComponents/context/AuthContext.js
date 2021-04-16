import { createContext } from 'react';

function noop() { };

export const AuthContext = createContext({
    isAuthenticated: false,
    token: '',
    userID: '',
    login: noop,
    logout: noop
});