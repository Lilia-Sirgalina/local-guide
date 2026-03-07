import { useState } from 'react'
import { useTranslation } from "react-i18next";
import {supermarkets} from './data/supermarkets.jsx'
import prevBtn from './icons8-back-64.png'
import nextBtn from './icons8-forward-64.png'

const Home = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];
    const [markets, setMarkets] = useState(0);
    const {id, name, image, description, source} = supermarkets[markets];    

    const previous = () => {
        setMarkets(markets => {
            markets --;
            if(markets < 0) {
                markets = supermarkets.length - 1;
            }
        return markets;
        })  
    }
    
    const next = () => {
        setMarkets(markets => {
            markets ++;
            if(markets > supermarkets.length - 1) {
                markets = 0;
            }
        return markets;
        })  
    }
    
    return (
        <div className='Home image'>

            <div className='header'>
                <h2>{t("3supermarkets")}</h2>
            </div>

            <div className='supermarkets'>                        
                
                <div className='storeCard'>
                    <div>
                        <button className='btn' onClick={previous}><img src={prevBtn} alt="prev button" width="40px" /></button> 
                    </div>

                    <div>
                        <h3>{name}</h3>
                        <img src={image} alt="supermarket" width="280px" height="150px" />
                        <p>{description?.[lang] || description?.en}</p>
                        <button className='linkToGoogle colorMarketLink'><a className='googleLink' href={source} target='_blank'>{t("google")}</a></button>
                    </div>

                    <div>
                        <button className='btn' onClick={next}><img src={nextBtn} alt="next button" width="40px" /></button> 
                    </div>
                </div>                
                    
            </div>            

            <div className='trashInfo'>
                
                <h2>{t("trash header")}</h2>
            
                <p>{t("trash description")}</p>
                <h3>{t("container colors")}</h3>
                <p>🟡 {t("yellow")} <br /> 
                🔵 {t("blue")} <br />
                🟢 {t("green")} <br />
                🟤 {t("brown")} <br /> 
                ⚫ {t("grey")}</p>
                <p> {t("container description")}</p>
                <h3>{t("containers")}</h3>
                <p>{t("containers 2km")} <a href="https://maps.app.goo.gl/z9TscXmkLXanDMX97" target='_blank'>{t("directions")}</a> </p>
                <p>{t("containers 3km")} <a href="https://maps.app.goo.gl/PJjiCWZw13S5dZm5A" target='_blank'>{t("directions")}</a> </p>
                <p>{t("containers 4km")} <a href="https://maps.app.goo.gl/fopKh6YfVtHeLhcu7" target='_blank'>{t("directions")}</a> </p>

            </div>

        </div>
    )
}

export default Home