import React from 'react';
import AdvSearch from './adv_search.jsx';
import '../scss/adv_search_list.scss';

function AdvSearchList({options, setValue}) {
    const optionsElements = options.map(option => 
        <AdvSearch option={option}></AdvSearch>
        )
    return(
        <div className="adv_search">
            {optionsElements}
            <input onChange={(event)=>setValue(event.target.value)} placeholder="enter key words"></input>
            <button className="adv_search_button">
                Search
            </button>
        </div>
    )
}
export default AdvSearchList