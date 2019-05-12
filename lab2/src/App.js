import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderPopUpMenu></HeaderPopUpMenu>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
