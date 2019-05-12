import React from 'react';
import FooterDataList from './footer_data_list';
import footerData from './footer_data.js'
import FooterInfo from './footer_info';
import './footer.scss';
export default function Footer(){
    return(
        <div className="footer">
            <FooterDataList footerData={footerData}></FooterDataList>
            <FooterInfo></FooterInfo>
        </div>
    )
}