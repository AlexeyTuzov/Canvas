import React from 'react';
import './App.css';
import Header from '../src/AppComponents/Header/Header.js';
import Footer from '../src/AppComponents/Footer/Footer.js';
import NavBar from '../src/AppComponents/NavBar/NavBar.js';
import Content from '../src/AppComponents/Content/Content.js';
import AuthPage from '../src/AppComponents/AuthPage/AuthPage.js';



const App = () => {
  let Authenticated = false;

  if (Authenticated) {
    return (
      <div className='App'>
        <Header />
        <NavBar />
        <Content />
        <Footer />

      </div>
    )
  }

  else {
    return (
        <AuthPage />
    )
  }

}

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
