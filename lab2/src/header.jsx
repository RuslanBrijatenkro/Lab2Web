import React from 'react';
import './header.scss';
import HeaderLogo from './header_logo';
import HeaderLinks from './header_links';
import HeaderSearch from './header_search';
function Header() {
  return(
    <div className="header_center_menu">
        <HeaderLogo></HeaderLogo>
        <HeaderLinks></HeaderLinks>
        <HeaderSearch></HeaderSearch>
    </div> 
  );
}

export default Header;