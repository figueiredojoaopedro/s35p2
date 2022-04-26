import React, {Component} from "react";
import '../../index.css';
import MenuItems from "./MenuItems"
import "./navbar.css"
import logo from "./logoSuper.png"

class NavBar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavBarItems">
                <div className="navbar-logo">
                    <img alt="logo" id="logo" src={logo}></img>
                </div>          
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {// we got to pass through the array to get the links and stuff put in that object
                    // for that, i will use the map() array method
                    MenuItems.map((item, index)=>{
                        return (<li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>);
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;