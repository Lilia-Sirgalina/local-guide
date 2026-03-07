import { useTranslation } from "react-i18next";
import { restaurants } from "./data/restaurants";
import { useState } from "react";
import { restaurantFilters } from "./data/filters";
import prevBtn from './icons8-back-64.png'
import nextBtn from './icons8-forward-64.png'


const Restaurants = () => {

    const {i18n, t} = useTranslation();
    const lang = i18n.language.split("-")[0];

    const [comida, setComida] = useState(restaurants);
    const top3Restaurants = restaurants.slice(0, 3);
    const [topRestaurants, setTopRestaurants] = useState(0);
    const {id, name, image, description, price, rating, source, mediterranean, chinese, localFood} = top3Restaurants[topRestaurants];

    const filteredRestaurants = (key, value) => {
        const filtered = restaurants.filter((restaurant) => restaurant[key] === value);
        setComida(filtered);
    };

    const cuisine = (restaurant) => {
        if (restaurant.mediterranean && restaurant.localFood) {
            return `${t("mediterranean")} / ${t("local food")}`;
        }
        if (restaurant.mediterranean) return t("mediterranean");
        if (restaurant.localFood) return t("local food");
        if (restaurant.chinese) return t("asian");
        return "";
    };

    const previous = () => {
        setTopRestaurants(restaurants => {
            restaurants --;
            if(restaurants < 0) {
                restaurants = top3Restaurants.length - 1;
            }
        return restaurants;
        })  
    }
    
    const next = () => {
        setTopRestaurants(restaurants => {
            restaurants ++;
            if(restaurants > top3Restaurants.length - 1) {
                restaurants = 0;
            }
        return restaurants;
    })  
    }

    return (
        <div className="Restaurants image">
            <div className='header'>
                <h2>{t("local restaurants")}</h2>
            </div>   

            <div className='trashInfo'>            
                <p>{t("info restaurants")}</p> 
            </div>

            <div className="top3beaches">                 
                

                <div key={id} className='restaurantsCard topRestaurantsCarrousel'>
                    <div>
                        <button className='btn' onClick={previous}><img src={prevBtn} alt="prev button" width="40px" /></button>
                    </div>

                    <div>
                        <h2 className="recommendedHeader">{t("recommended")}</h2>
                        <h3>{name}</h3>
                        <img src={image} alt="restaurant" width="280px" height="150px" />
                        <p>{description?.[lang] || description?.en}</p>
                        <p><span>{t("rating")}</span>{rating}</p>
                        <p><span>{t("price")} </span>{price}</p>
                        <p><span>{t("kitchen")}</span>{cuisine(top3Restaurants[topRestaurants])}</p>
                        <button className='linkToGoogle colorRestaurantsLink'><a className='googleLink' href={source} target='_blank'>{t("google")}</a></button>
                    </div>

                    <div>
                        <button className='btn' onClick={next}><img src={nextBtn} alt="next button" width="40px" /></button>
                    </div>
                    
                </div>                  
            </div>

            <div className="beachesButtons">               

                {restaurantFilters.map(filter => (
                    <button key={filter.label} className="filteredBtn restaurantBtn" onClick={() => filteredRestaurants(filter.type, filter.value)}>{t(filter.label)}</button>
                ))}

                <button className="filteredBtn restaurantBtn" onClick={() => setComida(restaurants)}>{t("show all")}</button>                
            </div>

            <div className="beaches-container">                   
                {comida.map(restaurant => {
                    const {id, name, image, description, price, rating, source, mediterranean, chinese, localFood} = restaurant;                    

                    return (
                        <div key={id} className='restaurantsCard'>
                            <h3>{name}</h3>
                            <img src={image} alt="beach" width="280px" height="150px" />
                            <p>{description[lang]}</p>
                            <p><span>{t("rating")}</span>{rating}</p>
                            <p><span>{t("price")} </span>{price}</p>
                            <p><span>{t("kitchen")}</span>{cuisine(restaurant)}</p>
                            <button className='linkToGoogle colorRestaurantsLink'><a className='googleLink' href={source} target='_blank'>{t("google")}</a></button>
                        </div> 
                    )                         
                })}                
            </div>    
        </div>
    )
}

export default Restaurants;