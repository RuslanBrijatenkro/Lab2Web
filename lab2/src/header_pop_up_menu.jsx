import React from 'react';
import HeaderPopUpMenuTop from './header_pop_up_menu_top';
import HeaderPopUpMenuLanguages from './header_pop_up_menu_languages';
import HeaderPopUpMenuList from './header_pop_up_menu_list';
import popUpMenu from './pop_up_menu_elements.js';
import './header_pop_up_menu.scss';
export default function HeaderPopUpMenu(){
    return(
        <div className="header_pop_up_menu">
            <HeaderPopUpMenuTop></HeaderPopUpMenuTop>
            <HeaderPopUpMenuLanguages></HeaderPopUpMenuLanguages>
            <HeaderPopUpMenuList popUpMenu={popUpMenu}></HeaderPopUpMenuList>
        </div>
    );
}