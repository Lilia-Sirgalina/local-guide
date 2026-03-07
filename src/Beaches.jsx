import { useState } from "react";
import { beaches } from "./data/beaches";
import { useTranslation } from "react-i18next";
import { beachFilters } from "./data/filters";
import prevBtn from './icons8-back-64.png'
import nextBtn from './icons8-forward-64.png'

const Beaches = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const [playas, setPlayas] = useState(beaches);
    const top3Beaches = beaches.slice(0, 3);
    const [topBeaches, setTopBeaches] = useState(0);
    const {id, name, image, description, gps} = top3Beaches[topBeaches];
    
    const filteredBeaches = (key, value) => {
        const filtered = beaches.filter((beach) => beach[key] === value);
        setPlayas(filtered);
    };

    const previous = () => {
        setTopBeaches(beaches => {
            beaches --;
            if(beaches < 0) {
                beaches = top3Beaches.length - 1;
            }
        return beaches;
        })  
    }
    
    const next = () => {
        setTopBeaches(beaches => {
            beaches ++;
            if(beaches > top3Beaches.length - 1) {
                beaches = 0;
            }
        return beaches;
        })  
    }

    
    return (
        <div className="Beaches image">
            <div className='header'>
                <h2>{t("beaches")}</h2>
            </div>   

            <div className='trashInfo'>            
                <p>{t("info beaches")}</p> 
            </div>         

            <div className="top3beaches">                  

                <div key={id} className='beachesCard topBeachesCarousel'>
                    <div>
                        <button className='btn' onClick={previous}><img src={prevBtn} alt="prev button" width="40px" /></button>
                    </div>

                    <div>
                        <h2 className="recommendedHeader">{t("recommended")}</h2>
                        <h3>{name}</h3>
                        <img src={image} alt="beach" width="280px" height="150px" />
                        <p>{description?.[lang] || description?.en}</p>
                        <button className='linkToGoogle colorBeachesLink'><a className='googleLinkBeach' href={gps} target='_blank'>{t("directions")}</a></button>
                    </div>

                    <div>
                        <button className='btn' onClick={next}><img src={nextBtn} alt="next button" width="40px" /></button>
                    </div>
                </div>

            </div>

            <div className='header'>
                <h2>{t("all beaches")}</h2>
            </div> 

            <div className="beachesButtons">

                {beachFilters.map(filter => (
                    <button key={filter.label} className="filteredBtn beachBtn" onClick={() => filteredBeaches(filter.type, filter.value)}>{t(filter.label)}</button>
                ))}

                <button className="filteredBtn beachBtn" onClick={() => setPlayas(beaches)}>{t("show all")}</button>                
            </div>

            <div className="beaches-container">                   
                {playas.map(beach => {
                    const {id, name, image, description, gps} = beach;

                    return (
                        <div key={id} className='beachesCard'>
                            <h3>{name}</h3>
                            <img src={image} alt="beach" width="280px" height="150px" />
                            <p>{description[lang]}</p>
                            <button className='linkToGoogle colorBeachesLink'><a className='googleLinkBeach' href={gps} target='_blank'>{t("directions")}</a></button>
                        </div> 
                    )                         
                })}                
            </div>    
            
        </div>
    )
}

export default Beaches;