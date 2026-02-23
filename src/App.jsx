import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from './Home';
import Beaches from './Beaches';
import Restaurants from './Restaurants';
import Barcelona from './Barcelona';

function App() {
  

  return (
    <>
      <h1>LOCALE GUIDE</h1>

      <div>
        <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/beaches" className="link">Beaches</Link>
        <Link to="/restaurants" className="link">Restaurants</Link>
        <Link to="/Barcelona" className="link">Barcelona/Girona</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/Barcelona" element={<Barcelona />} />
      </Routes>
    </Router>    
      </div>
    </>
  )
}

export default App
