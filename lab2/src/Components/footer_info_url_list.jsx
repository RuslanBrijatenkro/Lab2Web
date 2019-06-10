import React from 'react';
import FooterInfoUrl from './footer_info_url.jsx';
import '../scss/footer_info_url_list.scss';

export default function FooterInfoUrlList({urllist}){
    const urllistElements = urllist.map(element => 
        <FooterInfoUrl element={element}></FooterInfoUrl>
        )
    return(
        <div class="footer_info_container_url">
            {urllistElements}
        </div>
    )
}