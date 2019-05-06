import React from 'react';
import logo  from './images/sky2.jpg';
import './content_concerts.scss';

function ContentConcerts() {
    return(
        <div className="content_popular_concerts">
            <img className="background" src={logo}></img>
            <div className="header_actual_concerts">
                <button className="left"></button>
                <button className="right"></button>
            </div>
            <ul className="header_actual_concerts_slider">
                <li>
                    <button className="slider1">
                    </button>
                </li>
                    <li>
                    <button className="slider2">
                    </button>
                </li>
                <li>
                    <button className="slider3">
                    </button>
                </li>
                <li>
                    <button className="slider4">
                    </button>
                </li>
            </ul>
        </div>
    );
  }
  
  export default ContentConcerts;