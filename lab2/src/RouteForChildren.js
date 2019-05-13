import React from 'react';
import Header from './header';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import './RouteConcerts.scss';

function RouteForChildren() {
  return (
    <div className="RouteForChildren">
      <HeaderPopUpMenu></HeaderPopUpMenu>
      <Header></Header>
      <div className="routecontent">
        <p className='name'>
            ForChildren
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RouteForChildren;
