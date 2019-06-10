import '../scss/header_search.scss';
import telephone1 from '../images/telephone1.svg';
import email from '../images/email.svg';
import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logOut} from './actions.js'

function HeaderSearch({isLogin, logOut}) {
    return(
        <div className="header_center_menu_submenu">
            <a className="header_img">
                <img className="menu_img" src={telephone1}/>
            </a>
            <a className="header_img">
                <img className="menu_img" src={email}/>
            </a>
            {!isLogin? (
                <Link className="signIn" to="/signIn">
                    Sign In
                 </Link>
            ):
            (
                <button onClick={()=>logOut()}>
                    Log Out
                </button>
            )
            }

        </div>
    );
  }

  const mapDispatchToProps = {
    logOut
}

  const mapStateToProps=state=>({
      isLogin:state.ui.isLogin
  })

export default connect(mapStateToProps,mapDispatchToProps) (HeaderSearch);