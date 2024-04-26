import { React, useState } from 'react'
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);
 
  const resetCounter = () =>{
    setCounter(0)
  };
 
  const increaseCounter = () => {
    setCounter(count => count + 1);
  };
  const decreaseCounter = () => {
    setCounter(count => count - 1);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} data-cy="logo" className="logo" alt="logo" />
        <h3 data-cy="title">React and Cypress</h3>
        <p>Count: <span className="counter" data-cy="counter">{counter}</span> </p>
        <div className="counter-buttons-wrapper">
          <button className="counter-buttons" data-cy="increase" onClick={increaseCounter}>Increase Count</button>
          <button className="counter-buttons" data-cy="decrease" onClick={decreaseCounter}>Decrease Count</button>
        </div>
        <div className="counter-buttons-wrapper reset-button-wrapper">
          <button className="counter-buttons reset-button" data-cy="reset" onClick={resetCounter}>Reset</button>
        </div>
      </header>
    </div>
  );
}
