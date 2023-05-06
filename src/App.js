import React from 'react';
import Navbar from './com/Navbar';
import Home from './com/Home';
import Contact from './com/Contact';
import About from './com/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
