import React from 'react';
import './App.css';
import { Routes } from './AppComponents/AuthPage/routes.js';
import { AuthContext } from './AppComponents/context/AuthContext.js';
import { useAuth } from './AppComponents/AuthPage/Auth.hook.js';



const App = () => {

const {login, logout, token, userID, isAuthenticated} = useAuth();

  return (
    <AuthContext.Provider value = {{ login, logout, token, userID, isAuthenticated }}>
      <Routes />
    </AuthContext.Provider>
  );

}

export default App;
