import { useState } from 'react'
import {supermarkets} from './data/supermarkets.jsx'
import prevBtn from './icons8-back-64.png'
import nextBtn from './icons8-forward-64.png'

const Home = () => {

    const [markets, setMarkets] = useState(0);
    const {id, name, image, description, sourse} = supermarkets[markets];
    
    return (
        <div className='Home'>

            <div className='header'>
                <h2>3 nearest supermarkets</h2>
            </div>

            <div className='supermarkets'>
                <button className='btn'><img src={prevBtn} alt="prev button" width="50px" /></button>         
                
                <div className='storeCard'>
                    <h3>{name}</h3>
                    <img src={image} alt="supermarket" width="280px" height="150px" />
                    <p>{description.en}</p>
                    <button className='linkToGoogle'><a className='googleLink' href={sourse} target='_blank'>View on Google</a></button>
                </div>
                
                <button className='btn'><img src={nextBtn} alt="next button" width="50px" /></button>     
            </div>

            <div className='header'>
                <h2>Waste and Recycling</h2>
            </div>

            <div className='trashInfo'>
                <p>In Palafolls, it is mandatory to separate waste and dispose of it in the appropriate containers.</p>
                <h4>Container colors:</h4>
                <p>🟡 Yellow — plastic packaging, cans, and cartons <br /> 
                🔵 Blue — paper and cardboard <br />
                🟢 Green — glass bottles and containers <br />
                🟤 Brown — organic waste (food) <br /> 
                ⚫ Grey — non-recyclable waste</p>
                <p>Dispose of waste only in the designated containers. Leaving bags outside, on the street, roadside, or in natural areas is prohibited and may result in fines. 
                    In Palafolls, penalties for dumping waste outside the containers can reach up to €3,000 according to municipal regulations.</p>
                <h4>Nearest containers:</h4>
                <p>Containers a 2 km (5 min by car): <a href="https://maps.app.goo.gl/z9TscXmkLXanDMX97" target='_blank'>Get directions</a> </p>
                <p>Containers a 3 km (7 min by car): <a href="https://maps.app.goo.gl/PJjiCWZw13S5dZm5A" target='_blank'>Get directions</a> </p>
                <p>Containers a 4,2 km (9 min by car): <a href="https://maps.app.goo.gl/fopKh6YfVtHeLhcu7" target='_blank'>Get directions</a> </p>

            </div>

        </div>
    )
}

export default Home