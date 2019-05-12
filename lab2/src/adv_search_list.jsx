import React from 'react';
import AdvSearch from './adv_search.jsx';
import './adv_search_list.scss';

export default function AdvSearchList({options}) {
    console.log(options)
    const optionsElements = options.map(option => 
        <AdvSearch option={option}></AdvSearch>
        )
    return(
        <div className="adv_search">
            {optionsElements}
            <button className="adv_search_button">
                Search
            </button>
        </div>
    )
}