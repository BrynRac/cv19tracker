import React from 'react';

import './App.css';

import Counter from './components/Counter';
import HooksCounter from './components/HooksCounter';
import SpecificCounter from './components/SpecificCounter.js';
function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Counter />
      <HooksCounter />
      <SpecificCounter />
    </div>
  );
}

export default App;
