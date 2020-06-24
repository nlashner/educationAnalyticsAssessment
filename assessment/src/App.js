import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'



function App() {
  return (
    <div className="App">
      <div className='pdf'>
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default App;
