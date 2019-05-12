import React from 'react';
import Concerts from './conserts';
import './concert_list.scss';

export default function ConcertList({concerts}) {
    const concertsElements = concerts.map(concert => 
        <Concerts concert={concert}></Concerts>
        )
    return(
        <ul className="all_concerts_list">
             {concertsElements}
         </ul>
    )
 }