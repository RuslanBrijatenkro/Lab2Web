import React from 'react';
import '../scss/concerts.scss';
import image from '../images/1.jpg';
import {Component} from 'react';
import {CreateBooking} from './axios';
import { connect } from 'react-redux';
import {DeleteConcert} from './axios';
class Concerts extends Component{
    render(){
        const {concert, id, isAdmin}= this.props
        console.log(isAdmin);
        console.log(concert)
    return(
        <li className="list_concert1">
            <img src={image}/>
            <p className="concert_description">
                {concert.description}
            </p>
            <button className="concert_buy">Купить</button>
            <button onClick={()=>CreateBooking(id)} className={concert.name}>Бронировать</button>
            {isAdmin? (
                <button onClick={()=>{DeleteConcert(id)}}>Удалить</button>
            ):
            undefined
            }
        </li>
    );
  }
}
const mapStateToProps = state => ({
    isAdmin:state.ui.isAdmin
})
export default connect(mapStateToProps,null)(Concerts);