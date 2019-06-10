import React from 'react';
import HeaderPopUpMenuElement from './header_pop_up_menu_element';
import '../scss/header_pop_up_menu_list.scss';
export default function HeaderPopUpMenuList({popUpMenu}){
    const popUpMenuElements = popUpMenu.map(element =>
        <HeaderPopUpMenuElement element={element}></HeaderPopUpMenuElement>
        )
    return(
        <ul class="header_pop_up_menu_list">
            {popUpMenuElements}
        </ul>
    );
}