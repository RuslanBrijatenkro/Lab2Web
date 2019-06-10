import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
import HeaderPopUpMenu from './header_pop_up_menu';
import SignIn from './signIn.jsx'
import '../scss/RouteConcerts.scss';
import axios from 'axios';
import {getUser,logIn,setAsAdmin} from './actions';
import {connect} from 'react-redux';
class RouteSignIn extends Component {
    componentDidMount() {
        const {getUser}=this.props;
        axios.get('http://localhost:5000/signIn')
        .then( res => {
            if(res.request.status === 200){
                console.log(res.data)
                getUser(res.data)
            }
        })
        .catch(err => console.error(err))
    }
    CompareLoginData(loginInfo)
    {
        var flag = false;
        const{userData,history:{push},logIn,setAsAdmin} = this.props;
        console.log(userData);
        userData.forEach((user) => {
            console.log(user.email)
            if(user.email==loginInfo.email && user.password==loginInfo.password)
            {
                if(user.flag=='true')
                {
                    setAsAdmin();
                }
                logIn();
                push('/')
                flag=true;
            }
        });
        if(!flag)
            push('/signIn')
    }
    render(){
    return (
        <div className="RouteSignIn">
            <HeaderPopUpMenu></HeaderPopUpMenu>
            <Header></Header>
            <SignIn onSubmit={loginInfo => this.CompareLoginData(loginInfo)}></SignIn>
            <Footer></Footer>
        </div>
        );
    }
}

const mapDispatchToProps = {
    logIn,
    getUser,
    setAsAdmin
};

const mapStateToProps = state => ({
    userData:state.ui.userData,
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(RouteSignIn);
