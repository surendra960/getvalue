import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Import Routes
// import './App.css';

function Routerr() {
  return (
    <div >
      <Router>
        <div>
          <Link to="/Home">Home Page</Link>
          <Link to="/About">About Page</Link>
        </div>
        {/* Wrap Routes around your Route components */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home page of website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About page of website</p>
    </div>
  );
}

export default Routerr;
