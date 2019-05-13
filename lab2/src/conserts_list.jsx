import React from 'react';
import Concerts from './conserts';
import './concert_list.scss';

function ConcertList({concerts,fieldValue}) {

    const mas = concerts.filter((element) => element.description.includes(fieldValue))

    const concertsElements = mas.map(concert => 
        <Concerts concert={concert}></Concerts>
        )
    return(
        <ul className="all_concerts_list">
             {concertsElements}
         </ul>
    )
 }

 export default ConcertList