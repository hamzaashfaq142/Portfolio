import React from 'react';
import Navbar from './com/Navbar';
import Home from './com/Home';
import './css/index.css';
import Config from './config';

function App() {
  return (
    <div className="App">
      <Navbar brandName={Config.navHeader} resumeLink={Config.resumeLink} />
      <Home />
    </div>
  );
}

export default App;
