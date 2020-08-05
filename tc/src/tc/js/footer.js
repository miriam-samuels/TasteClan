import React from 'react'
import Icon from '../pictures/Icon.svg';
import { Link } from 'react-router-dom';
import Fb from '../Social/Facebook.svg';
import Ig from '../Social/Instagram.svg';
import Tweet from '../Social/Twitter.svg';
import Whatsapp from '../Social/Whatsapp.svg';

function footer() {
    return (
        <div className="credits">
            <div className="credit lg">
                <img src={Icon} alt="Logo" className="logo" /><br/>
                <b>Healthy You</b>
                <ul className="connect"><br/>
                <li><Link to="/"><img src={Fb} alt=""/></Link></li>
                <li><Link to="/menu"><img src={Ig} alt=""/></Link></li>
                <li><Link to="/blog"><img src={Tweet} alt=""/></Link></li>
                <li><Link to="/about"><img src={Whatsapp} alt=""/></Link></li>
                </ul>
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
            <div>
            <ul>
                <li><b>Patner With Us</b></li>
            <li><Link to="/AddRestaurant">For Restaurants</Link></li>
            <li><Link to="/AddDriver">For Drivers</Link></li>

                        </ul>
    </div>
            </div>
            <small>&copy;copyright 2020 TasteClan All Right Reserved</small>

            </div>
    )
}

export default footer
