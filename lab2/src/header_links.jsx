import './header_links.scss';
import React from 'react';
import {Link} from "react-router-dom";

function HeaderLinks() {
    return(
        <div className="header_center_menu_links">
            <Link className="link" to='/'>Концерти</Link>
            <Link className="link" to='/theaters'>Театри</Link>
            <Link className="link" to='/festivals'>Фестивалі</Link>
            <Link className="link" to='/forchildren'>Дітям</Link>
        </div>
    );
}
  
export default HeaderLinks;