import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes
import Nav from './Nav';
import Home from './Home';
import About from './About';
// import './App.css';

function Routerr() {
  return (
    <div >
        <Nav />
        {/* Wrap Routes around your Route components */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </div>
  );
}




export default Routerr;
