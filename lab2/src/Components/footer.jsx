import React from 'react';
import FooterDataList from './footer_data_list.jsx';
import footerData from '../data/footer_data.js'
import FooterInfo from './footer_info';
import '../scss/footer.scss';
export default function Footer(){
    return(
        <div className="footer">
            <FooterDataList footerData={footerData}></FooterDataList>
            <FooterInfo></FooterInfo>
        </div>
    )
}