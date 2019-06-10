import React from 'react';
import Header from './header';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import '../scss/RouteConcerts.scss';

function RouteTheaters() {
  return (
    <div className="RouteTheaters">
      <HeaderPopUpMenu></HeaderPopUpMenu>
      <Header></Header>
      <div className="routecontent">
        <p className='name'>
            Theatres
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RouteTheaters;
