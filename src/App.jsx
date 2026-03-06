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


function App() {

  const {i18n, t} = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);  

  return (
    <div className='App'> 

      <div className='headLine'>
        <div className='heading'>
          <h1>{t("local guide")}</h1>
        </div>
      
        <div className='langContainer'>
              <button className='langBtn' onClick={() => i18n.changeLanguage('en')}>EN /</button>
              <button className='langBtn' onClick={() => i18n.changeLanguage('fr')}>FR /</button>
              <button className='langBtn' onClick={() => i18n.changeLanguage('es')}>ES</button>                
        </div>
      </div> 

      

      <Router>
        <nav>
          <Link to="/" className="link">{t("home")}</Link>
          <Link to="/beaches" className="link">{t("beaches")}</Link>
          <Link to="/restaurants" className="link">{t("restaurants")}</Link>
          <Link to="/Barcelona" className="link">{t("bcn")}</Link>
          <Link to="/active" className="link">{t("active-nature")}</Link>
          <Link to="/shopping" className="link">{t("shopping")}</Link>
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
