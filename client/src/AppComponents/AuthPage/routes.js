import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import NavBar from '../NavBar/NavBar.js';
import Content from '../Content/Content.js';
import AuthPage from './AuthPage.js';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { AppContext } from '../context/AppContext.js';
import { useCanvas } from '../Content/Canvas/Canvas.hook.js';

export const Routes = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const { coordinatesArray, submitCoordinates, drawArray } = useCanvas();

  if (isAuthenticated) {
    return (
      <div className='App'>
        <AppContext.Provider value={{ coordinatesArray, submitCoordinates, drawArray }}>
          <Header />
          <NavBar />
          <Content />
          <Footer />
        </AppContext.Provider>

      </div>
    )
  }
  else return (
    <>
      <AuthPage />
    </>
  )
}