import React from 'react';
import Header from './header';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import '../scss/RouteConcerts.scss';

function RouteFestivals() {
  return (
    <div className="RouteFestivals">
      <HeaderPopUpMenu></HeaderPopUpMenu>
      <Header></Header>
      <div className="routecontent">
        <p className='name'>
            Festivals
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RouteFestivals;
