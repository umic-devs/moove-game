import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Em breve, mais um projeto da UMIC por aqui.
        </p>
        <a
          className="App-link"
          href="https://umic.com.br"
        >
          Ir para o site da UMIC
        </a>
      </header>
    </div>
  );
}

export default App;
