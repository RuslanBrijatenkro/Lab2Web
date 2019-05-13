import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';

function RouteConcerts() {
  return (
    <div className="RouteConcerts">
      <HeaderPopUpMenu></HeaderPopUpMenu>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default RouteConcerts;
