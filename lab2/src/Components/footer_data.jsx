import React from 'react';
import '../scss/footer_data.scss';
export default function FooterData(props){
    const {footer}=props
    return(
        <li className="footer_link">{footer}</li>
    )
}