import React from 'react';
import FooterData from './footer_data.jsx';
import '../scss/footer_data_list.scss';

export default function FooterDataList({footerData}){
    const footerElements = footerData.map(footer => 
        <FooterData footer={footer}></FooterData>
        )
    return(
        <div class="footer_data_container">
            <a class="logo">
                Concert.ua
            </a>
            <ul class="footer_links">
                {footerElements}
            </ul>
        </div>
    )
}