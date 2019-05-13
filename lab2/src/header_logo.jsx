import './header_logo.scss';
import React,{Component} from 'react';
class HeaderLogo extends Component{
    state={
        isOpen:true
    }

    render(){
        return(
            <div className="Logo">
                <button onClick={this.handleClick} className="header_center_menu_pop_up_menu_button"></button>
                <a className="header_project_name">
                    Concert.ua
                </a>
            </div>
        )
    }
    handleClick= () =>
    {
        console.log(this.state)
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
}

export default HeaderLogo;