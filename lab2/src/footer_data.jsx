import React from 'react';
import './footer_data.scss';
export default function FooterData(props){
    const {footer}=props
    return(
        <li className="footer_link">{footer}</li>
    )
}