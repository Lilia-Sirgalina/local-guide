import { useTranslation } from "react-i18next";
import { restaurants } from "./data/restaurants";

const Restaurants = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language;



    return (
        <div className="Restaurants image">
            <div className='header'>
                <h2>{t("local restaurants")}</h2>
            </div>   

            <div className='trashInfo'>            
                <p>{t("info restaurants")}</p> 
            </div>

            <div className="beaches-container">                   
                {restaurants.map(restaurant => {
                    const {id, name, image, description, price, rating, source} = restaurant;

                    return (
                        <div key={id} className='beachesCard'>
                            <h3>{name}</h3>
                            <img src={image} alt="beach" width="280px" height="150px" />
                            <p>{description[lang]}</p>
                            <button className='linkToGoogle colorBeachesLink'><a className='googleLinkBeach' href={source} target='_blank'>{t("google")}</a></button>
                        </div> 
                    )                         
                })}                
            </div>    
        </div>
    )
}

export default Restaurants;