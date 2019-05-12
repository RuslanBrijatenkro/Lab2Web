import React from 'react';
import './header_pop_up_menu_languages.scss';
export default function HeaderPopUpMenuLanguages(){
    return(
            <div className="languages">
                <a className="header_pop_up_menu_uk">
                        UK
                </a>
                <a className="header_pop_up_menu_ru">
                        RU
                </a>
                <a className="header_pop_up_menu_en">
                        EN
                </a>
            </div>
    );
}