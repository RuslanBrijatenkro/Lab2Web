import React from 'react';
import './concerts.scss';
import image from './images/1.jpg';
function Concerts(props) {
    const {concert}= props
    return(
    <li className="list_concert1">
        <img src={image}/>
        <p className="concert_description">
            {concert.description}
        </p>
        <button className="concert_buy">Купить</button>  
    </li>
    );
  }
  export default Concerts;