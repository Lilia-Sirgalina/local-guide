import { useTranslation } from 'react-i18next';
import menuButton from './burger-menu.png'
import closeButton from './close-menu.png'

const Menu = ({ menuOpen, openMenu, closeMenu }) => {

    const {i18n, t} = useTranslation();
  
    return(
        <div className='headLine'>
            <div className="mobileMenuBtn">
                {!menuOpen ? (
                    <button onClick={openMenu} className="menuBtn">
                        <img src={menuButton} alt="burger button" />
                    </button>
                    ) : (
                    <button onClick={closeMenu} className="menuBtn">
                        <img src={closeButton} alt="close button" />
                    </button>
                )}
            </div>

            <div className='heading'>
                <h1>{t("local guide")}</h1>
            </div>
        
            <div className='langContainer'>
                <button className='langBtn' onClick={() => i18n.changeLanguage('en')}>EN /</button>
                <button className='langBtn' onClick={() => i18n.changeLanguage('fr')}>FR /</button>
                <button className='langBtn' onClick={() => i18n.changeLanguage('es')}>ES</button>                
            </div>
        </div>      
    )
}

export default Menu;