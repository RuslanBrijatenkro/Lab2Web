import React from 'react';
import './main_content.scss';
import ConcertList from './conserts_list';
import list from './information';
import AdvSearchList from './adv_search_list';
import options from './adv_search_info';
function MainContent() {
    return(
        <div className="content_all_concerts">
            <p className="name">Все концерты</p>
            <div className="concerts_search">
                <ConcertList concerts={list}></ConcertList>
                <AdvSearchList options={options}></AdvSearchList>
            </div>
        </div>
        
    );
  }
  export default MainContent;