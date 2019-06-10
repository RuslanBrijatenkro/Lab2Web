import React from 'react';
import '../scss/footer_info_numbers.scss';
export default function FooterInfoNumbers(props){
    const {number} = props
    return(
        <li>{number}</li>
    )
}