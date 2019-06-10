import React from 'react';
import FooterInfoNumbers from './footer_info_numbers';
import '../scss/footer_info_numbers_list.scss';

export default function FooterInfoNumbersList({numbers}){
    const numbersElements = numbers.map(number=>
        <FooterInfoNumbers number={number}></FooterInfoNumbers>
        )
    return(
        <div class="footer_info-container_numbers">
            <ul class="telephoneNumbers">
                {numbersElements}
            </ul>
        </div>
    )
}