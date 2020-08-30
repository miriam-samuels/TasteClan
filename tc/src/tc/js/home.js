import React, {Component}  from 'react'
import { Link } from 'react-router-dom';
import TopRes from './topResSlider';
import CustomerReview from './customerReview.js';
import Menubar from './menubar';
import Credits from './footer';
import Search from '../pictures/search.svg';
import Order from '../pictures/order.svg';
import Checkout from '../pictures/checkOut.svg';
import Eat from '../pictures/eat.svg';
import Dot from '../pictures/Dots.svg';
import Ordercart from './orderCart';
import OrderFood from './mealList';

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "",
            suscribe: "",
        }
    }

    userLocation = (event) => {
        this.setState({
            location: event.target.value
        });
        event.preventDefault();
    }
    subscribe = (event) => {
        this.setState({
            subscribe: event.target.value
        });
        event.preventDefault();
    }
    subscribed = () => {
        alert("Thank you for subscribing to TasteClan Newsletters,we would gladly update you on any info");
    }

    render() {
        return (
            <div>
                <Ordercart />
                <section className="top">
                    <Menubar />
                    <div className="hero">
                        <div className="heroWord">
                            <h1>Tired of Waiting For Your Food</h1>
                            <p>Get your food from the restaurant of your choice without having to wait too long</p>
                            <Link to="/menu"> <button>Order Now</button></Link>
                        </div>
                    </div>
                </section>
                <section className="howItWorks">
                    <div>
                        <img src={Dot} alt="" className="dot dot1" />
                        <img src={Dot} alt="" className="dot dot2" />
                        <h2>How It Works?</h2>
                    </div>
                    <div className="process">
                    <div>
                        <figure >
                            <img src={Search} alt="" />
                            <figcaption>
                                <b>Search</b>
                                <p>select the restaurant of your choice</p>
                            </figcaption>
                        </figure>
                        <figure >
                            <img src={Order} alt="" />
                            <figcaption >
                                <b>Order</b>
                                <p>choose your wanted delicious meal</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Checkout} alt="" />
                            <figcaption >
                                <b>Check Out</b>
                                <p>pay via card, transfer or cash on delivery</p>
                            </figcaption>
                        </figure>
                        <figure >
                            <img src={Eat} alt="" />
                            <figcaption>
                                <b>Eat</b>
                                <p>enjoy your food to your heart content</p>
                            </figcaption>
                        </figure>
                    </div>
                    </div>
                </section>
                <section className="topRes">
                    <TopRes />
                </section>
                <section className="fdOrder">
                <img src={Dot} alt="" className="dot dot1" />
                <img src={Dot} alt="" className="dot dot2" />
                    <div>
                        <h2>Order Food Near You</h2>
                        <p>check out the trendy places people are ordering from</p>
                    </div>
                    
                    <div className="locator">
                        <form onSubmit={this.getUserLocation}>
                            <input type="text" value={this.state.location} placeholder="enter your location" onChange={this.userLocation} />
                            <button type="submit">Check</button>
                        </form>
                    </div>
                    <OrderFood /><br/>
                    <Link to="/menu"><button>View More</button></Link>
                </section>
                <section className="cusrev">
                    <div className="ads">
                        <div className="message">COMING SOON</div>
                    </div>
                    <CustomerReview />
                </section>
                <section className="footer">
                    <div className="patner">
                        <p>
                            Are you a restaurant owner? Do you sell food and need a way to deliver to
                            customers? Do you own a vehicle and intrested in goods delivery?
                            Do you enjoy cooking?<br />
                            Then
                        </p><br/>
                        <Link to="/patner"> <button>Partner With Us </button></Link>
                    </div>
                    <div className="newsletter">
                        <h3>Newsletter Sign Up</h3>
                        <p>Connect with us for update and offers
                        </p>
                        <form onSubmit={this.subscribed}>
                            <input type="email" placeholder="email address" value={this.state.subscribe} onChange={this.subscribe} required />
                            <button type="submit">suscribe</button>
                        </form>
                    </div>
                    <Credits />
                </section>
            </div>


        )
    }
}

export default home

