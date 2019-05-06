import React from 'react';
import './main_content.scss';
import ConcertList from './concerts_list';

function MainContent() {
    return(
        <div class="content_all_concerts">
            <p class="name">Все концерты</p>
            <div className="concerts_search">
                <ConcertList></ConcertList>
            </div>
        </div>
        
    );
  }
  export default MainContent;