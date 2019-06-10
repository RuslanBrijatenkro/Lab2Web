import React from 'react';
import ContentConcerts from './content_concerts';
import MainContent from './main_content';
import '../scss/content.scss';

function Content() {
    return(
        <div className="content">
            <ContentConcerts></ContentConcerts>
            <MainContent></MainContent>
        </div>
    );
  }
  export default Content;