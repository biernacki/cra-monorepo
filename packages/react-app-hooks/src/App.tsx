import React, { useState, useEffect } from 'react';
import { Header } from '@ui/shared';

import logo from './logo.svg';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('Testing hooks!');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header>Application Title</Header>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle logo visibility
        </button>
        {isVisible && <img src={logo} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
