import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather'

function App() {

  const [toggle, setToggle] = useState(false)

  const showWeather = () => {
    console.log(!toggle)
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <button onClick={showWeather}>Show Weather</button>
      {
        toggle ? <Weather /> : null
      }
      
    </div>
  );
}

export default App;
