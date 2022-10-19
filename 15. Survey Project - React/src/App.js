import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Survey from './components/Survey/Survey';
import Sensory from './components/Sensory/Sensory';
import Report from './components/Report/Report';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
       <div className="logo-title">
          <img className="logo" src="/img/logo.png" alt="logo"/>

          <div className="div-title">
            <p className="title-big"> Survey Tool </p>
            <p className="title-small"> Home</p>
          </div>

        </div>
        <Navbar />

        <Routes>
          <Route exact path="/survey" element={<Survey />} />
          <Route exact path="/sensory" element={<Sensory />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
