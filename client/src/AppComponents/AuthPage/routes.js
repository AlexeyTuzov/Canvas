import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import NavBar from '../NavBar/NavBar.js';
import Content from '../Content/Content.js';
import AuthPage from './AuthPage.js';
import { useContext } from 'react';
import { AuthContext} from '../context/AuthContext.js';

export const Routes = () => {

  const { isAuthenticated } = useContext(AuthContext);
  console.log('isAuthenticated in ROUTES:', isAuthenticated);

if (isAuthenticated) {
    return (
      <div className='App'>
        <Header />
        <NavBar />
        <Content />
        <Footer />

      </div>
    )
  }
  else return (
    <>
    <AuthPage />
    </>
  )
}