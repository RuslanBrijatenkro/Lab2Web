import React from 'react';
import '../scss/footer_info_url.scss'

export default function FooterInfoUrl(props){
    const {element}=props
    return(
        <a className="socialNetwork">
            <img src={element} alt=""/>
        </a>
    )
}