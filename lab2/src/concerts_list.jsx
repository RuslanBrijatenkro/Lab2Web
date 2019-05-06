import React from 'react';
import './concerts_list.scss';

function ConcertList() {
    return(
        <ul class="all_concerts_list">
            <li class="list_concert1">
                <img src="./images/1.jpg"/>
                <p class="concert_description">
                    Краткое описание
                </p>
                <button class="concert_buy">Купить</button>  
            </li>
            <li class="list_concert2">
                <img src="./images/1.jpg"/>
                <p class="concert_description">
                    Краткое описание
                </p> 
                <button class="concert_buy">Купить</button>   
            </li>
            <li class="list_concert3">
                <img src="./images/1.jpg"/>
                <p class="concert_description">
                    Краткое описание
                </p>
                <button class="concert_buy">Купить</button>    
            </li>
            <li class="list_concert4">
                <img src="./images/1.jpg"/>
                <p class="concert_description"> 
                    Краткое описание
                </p>
                <button class="concert_buy">Купить</button>    
            </li>
            <li class="list_concert5">
                <img src="./images/1.jpg"/>
                <p class="concert_description">
                    Краткое описание
                </p>
                <button class="concert_buy">Купить</button>    
            </li>
            <li class="list_concert6">
                <img src="./images/1.jpg"/>
                <p class="concert_description">
                    Краткое описание
                </p> 
                <button class="concert_buy">Купить</button>   
            </li>
        </ul>
    );
  }
  export default ConcertList;