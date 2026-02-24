import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from './Home';
import Beaches from './Beaches';
import Restaurants from './Restaurants';
import Barcelona from './Barcelona';
import ActiveAndNature from './ActiveAndNature';
import spainFlag from './icons8-spain-flag-48.png'


function App() {

  const [open, setOpen] = useState(false);

  

  return (
    <> 
      <div className='header'>
        <h1>LOCAL GUIDE</h1>
      </div>

      <Router>
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/beaches" className="link">Beaches</Link>
          <Link to="/restaurants" className="link">Restaurants</Link>
          <Link to="/Barcelona" className="link">Barcelona/Girona</Link>
          <Link to="/active" className="link">Active&Nature</Link>

          <div className='langContainer' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <button className='langBtn'>ES ▾</button>
                {open && (
                  <div className='dropdownLang'>
                    <button className='langBtn'>EN</button>
                    <button className='langBtn'>FR</button>
                  </div>
                )}
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/Barcelona" element={<Barcelona />} />
          <Route path="/active" element={<ActiveAndNature />} />
        </Routes>
      </Router>    
     
    </>
  )
}

export default App
