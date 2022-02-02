import React from 'react';
import Header from './components/Header'
import Characters from './components/Characters'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <p>Hello Happy Pork </p>
      <Header />
      <Characters />
    </div>
  );
};

export default App;