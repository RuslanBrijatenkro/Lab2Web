import React from 'react';
import '../scss/adv_search.scss';
function AdvSearch(props){
    const {option} = props
    console.log(option)
    return(
        <div className="criterion">
            <p>{option.id}</p>
            <ul className="criterion_container">
                <li><input className="radio" type="radio" id={option.id+option.variants[0]} name={option.id} value="Value1"/><label htmlFor={option.id+option.variants[0]}>Value1</label></li>
                <li><input className="radio" type="radio" id={option.id+option.variants[1]} name={option.id} value="Value2"/><label htmlFor={option.id+option.variants[1]}>Value2</label></li>
                <li><input className="radio" type="radio" id={option.id+option.variants[2]} name={option.id} value="Value3"/><label htmlFor={option.id+option.variants[2]}>Value3</label></li>
            </ul>
        </div>
    );
}
export default AdvSearch;