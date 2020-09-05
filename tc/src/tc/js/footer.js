import React from 'react'
import Icon from '../pictures/Icon.svg';
import { Link } from 'react-router-dom';
import Fb from '../pictures/Social/Facebook.svg';
import Ig from '../pictures/Social/Instagram.svg';
import Tweet from '../pictures/Social/Twitter.svg';
import Whatsapp from '../pictures/Social/Whatsapp.svg';

function footer() {
    return (
        <div className="credits">
            <div className="credit lg">
                <img src={Icon} alt="Logo" className="logo" /><br/>
                <b>Healthy You</b>
                <div className="connect"><br/>
                <span><Link to="/"><img src={Fb} alt=""/></Link></span>
                <span><Link to="/menu"><img src={Ig} alt=""/></Link></span>
                <span><Link to="/blog"><img src={Tweet} alt=""/></Link></span>
                <span><Link to="/about"><img src={Whatsapp} alt=""/></Link></span>
                </div>
            </div>
            <div className="credit links">
            <div className="link">
                <ul>
                    <li> <b>QuickLinks</b></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                            </ul>
        </div>
        <div className="link">
                <ul>
                <li><b>Business</b></li>
                <li><Link to="/">Order</Link></li>
                <li><Link to="/menu">Terms and Conditions</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">Privacy</Link></li>
                <li><Link to="/contact">Advertise</Link></li>
                            </ul>
        </div>

            </div>
            <div className="credit">
 
            <ul>
                <li><b>Patner With Us</b></li>
            <li><Link to="/AddRestaurant">For Restaurants</Link></li>
            <li><Link to="/AddDriver">For Drivers</Link></li>

                        </ul>

            </div>
            {/* <p>&copy;copyright 2020 TasteClan All Right Reserved</p> */}

            </div>
    )
}

export default footer
