import './header_search.scss';
import telephone1 from './images/telephone1.svg';
import email from './images/email.svg';
import React from 'react';

function HeaderLogo() {
    return(
        <div className="header_center_menu_submenu">
            <a className="header_img">
                <img className="menu_img" src={telephone1}/>
            </a>
            <a className="header_img">
                <img className="menu_img" src={email}/>
            </a>
            <input type="text" placeholder="Search.."/>
            <button type="button" className="header_search">
            </button>
        </div>
    );
  }
  
  export default HeaderLogo;