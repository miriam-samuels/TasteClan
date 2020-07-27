import React, { Component } from 'react'
import Icon from './pictures/Icon.svg';
import { Link } from 'react-router-dom';
import Drop from './pictures/Dropdown.svg';

class menubar extends Component {

    openMenu = () => {
        let click = document.querySelector(".navBar ul");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
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
                            {/* <li><Link to="/login">Sign in</Link></li> */}
                        </ul>
                    </div>
                    <div className="cart ">
                        <Link to="/login"><button >Login Now</button></Link>
                    </div>
                    </div>
            </div>
        )
    }
}

export default menubar
