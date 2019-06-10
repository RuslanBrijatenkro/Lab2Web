import React from 'react';
import FooterInfoUrlList from './footer_info_url_list.jsx';
import urllist from './footer_info_url_list.js';
import '../scss/footer_info.scss';
import FooterInfoNumbersList from './footer_info_numbers_list';
import numbers from '../data/numbers.js'
export default function FooterInfo(){
    return(
        <div class="footer_info_container">
            <FooterInfoUrlList urllist={urllist}></FooterInfoUrlList>
            <FooterInfoNumbersList numbers={numbers}></FooterInfoNumbersList>
        </div>
    )
}