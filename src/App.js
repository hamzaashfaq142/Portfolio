import React from 'react';
import Navbar from './com/Navbar';
import Home from './com/Home';
import Contact from './com/Contact';
import About from './com/About';
import Experience from './com/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      {/* <Experience/>
      <Contact/> */}
    </div>
  );
}

export default App;
