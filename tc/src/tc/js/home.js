import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menubar from './menubar';
import Credits from './footer';
import Search from '../pictures/search.svg';
import Order from '../pictures/order.svg';
import Checkout from '../pictures/checkOut.svg';
import Eat from '../pictures/eat.svg';
import Dot from '../pictures/Dots.svg';
import Ordercart from './orderCart';
import OrderFood from './orderFoodNearYou';

var slideIndex = 0;
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
    showSlides = (n) => {
        var i;
        var slides = document.querySelectorAll(".cusrev div .slider ul li");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    componentDidMount() {
        setTimeout(this.showSlides(slideIndex), 1);
    }

    render() {

        return (
            <div className="body">
                    <Ordercart/>
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
                        <img src={Dot} alt="" className="dot1" />
                        <img src={Dot} alt="" className="dot2" />
                        <h2>
                            How It Works?
                    </h2>
                    </div>
                    <div className="process">
                      
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
                </section>
                <section className="topRes">
                    <div>
                        <h2>Top Restaurants </h2>

                        <div className="slider">
                            <ul>
                                <li><Link to=""><b>&spades;</b> Savour</Link></li>
                                <li><Link to=""><b>&clubs;</b> Chapters</Link></li>
                                <li><Link to=""><b>&diams;</b> Lezcan</Link></li>
                                <li><Link to=""><b>&hearts;</b> Mega</Link></li>
                                <li><Link to=""><b>&#9733;</b> Savour</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="fdOrder">
                    <div>
                        <img src={Dot} alt="" className="dot1" />
                        <img src={Dot} alt="" className="dot2" />
                        <h2>Order Food Near You</h2>
                        <p>check out the trendy places</p>
                    </div>
                    <div className="locator">
                        <form onSubmit={this.getUserLocation}>
                            <input type="text" value={this.state.location} placeholder="enter your location" onChange={this.userLocation} />
                            <button type="submit">Find Me</button>
                        </form>
                    </div>
                  <OrderFood/>
                    <Link to="/menu"><button>View More</button></Link>
                </section>
                <section className="cusrev">
                    <div className="ads">
                        <div className="message">COMING SOON</div>
                    </div>
                    <div className="review">
                        <div className="btns">
                            <button className="prev" onClick={() => this.showSlides(slideIndex += -1)}>&#10094;</button>

                            <button className="next" onClick={() => this.showSlides(slideIndex += 1)}>&#10095;</button>
                        </div>
                        <div className="slider">
                            <h3>What Customer say about us</h3>
                            <ul>
                                <li className="mySlides">
                                    The food was absolutely wonderful and the awesome presentation was indeed
                                    a sight to behold
                    </li>
                                <li className="mySlides">
                                    The food was delicous and i plan to patronize a lot more times in
                                    the nearest future
                    </li>
                                <li className="mySlides">
                                    Good customer service, sectacular food and a very hygenic package. What else
                                    could i ask for.
                    </li>
                            </ul>
                            <Link to="/comments"> <button>Comment</button></Link>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div className="patner">
                        <b>
                            Are you a restaurant owner? Do you sell food and need a way to deliver to
                            customers? Do you own a vehicle and intrested in goods delivery?
                Do you enjoy cooking?<br />
                            Then
                        </b><br />
                        <Link to="/patner"> <button>Partner With Us </button></Link>
                    </div>
                    <div className="newsletter">
                        <h3>Newsletter Sign Up</h3>
                        <p>Connect with us for update and offers
                        </p>
                        <form onSubmit={this.subscribed}>
                            <input type="email" placeholder="email address" value={this.state.subscribe} onChange={this.subscribe} />
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

