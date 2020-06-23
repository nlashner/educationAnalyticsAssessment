import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ProgramPercentages from './components/ProgramPercentages/ProgramPercentages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProgramPercentages />
    </div>
  );
}

export default App;
