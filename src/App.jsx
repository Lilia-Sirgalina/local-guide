import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import './App.css'
import Home from './Home';
import Beaches from './Beaches';
import Restaurants from './Restaurants';
import Barcelona from './Barcelona';
import ActiveAndNature from './ActiveAndNature';
import Shopping from './Shopping';
import Menu from './Menu';



function App() {

  const {i18n, t} = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);  
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  

  return (
    <div className='App'> 

      <Menu menuOpen={menuOpen} openMenu={openMenu} closeMenu={closeMenu}/>

      <Router>
        <nav className={menuOpen ? "navLinks active" : "navLinks"}>
          <Link to="/" className="link" onClick={closeMenu}>{t("home")}</Link>
          <Link to="/beaches" className="link" onClick={closeMenu}>{t("beaches")}</Link>
          <Link to="/restaurants" className="link" onClick={closeMenu}>{t("restaurants")}</Link>
          <Link to="/Barcelona" className="link" onClick={closeMenu}>{t("bcn")}</Link>
          <Link to="/active" className="link" onClick={closeMenu}>{t("active-nature")}</Link>
          <Link to="/shopping" className="link" onClick={closeMenu}>{t("shopping")}</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/Barcelona" element={<Barcelona />} />
          <Route path="/active" element={<ActiveAndNature />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Router>    
     
    </div>
  )
}

export default App
