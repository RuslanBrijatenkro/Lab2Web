import React from 'react';
import './concerts.scss';

function Concerts(props) {
    const {concert}= props
    return(
    <li className="list_concert1">
        <img src="./images/1.jpg"/>
        <p className="concert_description">
            {concert.description}
        </p>
        <button className="concert_buy">Купить</button>  
    </li>
    );
  }
  export default Concerts;