import React,{Component} from 'react';
import Concerts from './conserts';
import '../scss/concert_list.scss';
import axios from 'axios';
import {connect} from 'react-redux';
import {getConcerts,getBooking} from './actions';

class ConcertList extends Component {
    componentDidMount() {
        const {getConcerts,getBooking}=this.props;
        axios.get('http://localhost:5000/getConcerts')
        .then( res => {
            if(res.request.status === 200){
                console.log(res.data)
                getConcerts(res.data)
            }
        })
        .catch(err => console.error(err))
        axios.get('http://localhost:5000/booking')
        .then( res => {
            if(res.request.status === 200){
                getBooking(res.data)
            }
        })
        .catch(err => console.error(err))
    }

    render(){
        const {concerts,fieldValue,bookingConcerts} = this.props;
        const mas = concerts.filter((element) => element.description.includes(fieldValue))
        function filterMas(elem)  {
            let flag=true;
            bookingConcerts.forEach(element => {
                console.log(element.id,elem._id)
                if(element.id == elem._id){
                    console.log('qdawd')
                    flag=false;
                }
            });
            return flag;
          }
        console.log(bookingConcerts);
        console.log(mas);
        const mas2 = mas.filter(filterMas);
        console.log(mas2)
        const concertsElements = mas2.map(concert => 
            <Concerts key={concert.id} id={concert._id} concert={concert}></Concerts>
            )
        console.log(concertsElements)
        return(
            <ul className="all_concerts_list">
                {concertsElements}
            </ul>
        )
    }
 }
 const mapStateToProps = state => ({
    concerts:state.ui.concerts,
    fieldValue:state.ui.searchValue,
    bookingConcerts:state.ui.bookings
})
 const mapDispatchToProps = {
    getConcerts,
    getBooking
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ConcertList);