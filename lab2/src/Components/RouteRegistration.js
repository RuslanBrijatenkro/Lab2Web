import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import '../scss/RouteConcerts.scss';
import CreateAccount from './createAccount';
import {CreateUser} from './axios';

class RouteRegistration extends Component{

  render(){
        return (
            <div className="RouteForChildren">
              <HeaderPopUpMenu></HeaderPopUpMenu>
              <Header></Header>
              <CreateAccount onSubmit={newUser => CreateUser(newUser)}></CreateAccount>
              <Footer></Footer>
            </div>
          );
    }
}
export default RouteRegistration;
