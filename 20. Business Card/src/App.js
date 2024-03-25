
import './App.css';
import React from 'react';
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Interets from './components/Interests';


function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>

      <Info />
      <About />
      <Interets />
      <Footer />

    </div>
  );
}

export default App;
