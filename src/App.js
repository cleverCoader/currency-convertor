import React from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Currency Converter</h1>
      <CurrencyRow/>
      <div>=</div>
      <CurrencyRow/>
    </div>
  );
}

export default App;
