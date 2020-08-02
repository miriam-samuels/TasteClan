import React, { Component } from 'react'
import Icon from '../pictures/Icon.svg';
import { Link } from 'react-router-dom';
import Drop from '../pictures/Dropdown.svg';

class menubar extends Component {
constructor(props) {
    super(props)

    this.state = {
         show:false,
    }
}

    openMenu = () => {
        let click = document.querySelector(".navBar ul");
        if (this.state.show === false) {
            click.style.display = "block";
            this.setState({
                show:true,
            });}
        else{ 
            click.style.display = "none";
            this.setState({
                show:false,
            })
        }
    }
    render() {
        return (
            <div className="menu">
                <div className="menuBar">
                    <div className="logo">
                        <img src={Icon} alt="Logo" className="logo" />
                    </div>
                    <div className="navBar ">
                        <img src={Drop} alt="DrpBtn" className="drpBtn" onClick={this.openMenu} />
                        <ul className="navCon">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/patner">Patner</Link></li>
                        </ul>
                    </div>
                    <div className="cart ">
                        <Link to="/login"><button >Sign Up</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default menubar
