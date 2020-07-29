import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menubar from './menubar';
import Credits from './footer';
import Search from './pictures/search.svg';
import Order from './pictures/order.svg';
import Checkout from './pictures/checkOut.svg';
import Eat from './pictures/eat.svg';
import Dot from './pictures/Dots.svg';
import Food1 from './pictures/FOOD_01.jpg';
import Food2 from './pictures/FOOD_02.jpg';
import Food3 from './pictures/FOOD_03.jpg';

var slideIndex = 0;
class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCounter1: 0,
            likeCounter2: 0,
            likeCounter3: 0,
            location: "",
            suscribe: "",
        }
    }



    counter = (counter) => {
        let color = Array.from(document.querySelectorAll(".fdOrder figure figcaption span"));
        color.forEach((elem, index) => {
            color[index].style.color = "#fe724e";

        });
        this.setState((prevState) => ({
            [`likeCounter${counter}`]: prevState[`likeCounter${counter}`] + 1,
        }));

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

        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            }, function (error) {
                console.error(`Error Code =  ${error.code} - ${error.message} `);
            });
        }
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longtitude is :", position.coords.longitude);
            });
        }

    }

    render() {
        return (
            <div className="body">
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
                        <div >
                            <figure className="how">
                                <img src={Search} alt="" />
                                <figcaption className="how">
                                    <b>Search</b>
                                    <p>select the restaurant of your choice</p>
                                </figcaption>
                            </figure>

                        </div>
                        <div >
                            <figure className="how">
                                <img src={Order} alt="" />
                                <figcaption className="how">
                                    <b>Order</b>
                                    <p>choose your delicious meal</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div >
                            <figure className="how">
                                <img src={Checkout} alt="" />
                                <figcaption className="how">
                                    <b>Check Out</b>
                                    <p>pay via card, transfer or cash on delivery</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure className="how">
                                <img src={Eat} alt="" />
                                <figcaption className="how">
                                    <b>Eat</b>
                                    <p>enjoy your food to your heart content</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="topRes">
                    <div>
                        <h2>Top Restaurants </h2>

                        <div className="slider">
                            <ul>
                                <li><Link to="">Savour</Link></li>
                                <li><Link to="">Chapters</Link></li>
                                <li><Link to="">Lezcan</Link></li>
                                <li><Link to="">Mega</Link></li>
                                <li><Link to="">Savour</Link></li>
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
                    <div >
                        <figure>
                            <img src={Food1} alt="" />
                            <figcaption>
                                <p>Price &#8358;1500 </p>
                                <b>Jollof Rice and Fried Chicken</b><br />
                                <small>TasteClan Resturant</small><br />
                                <span onClick={() => this.counter(1)}> &#8902;</span> <small >{this.state.likeCounter1} likes</small>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food2} alt="" />
                            <figcaption>
                                <p>Price &#8358;500 </p>
                                <b>Chili Hot Dog And Sauce</b><br />
                                <small>TasteClan Resturant</small><br />
                                <span onClick={() => this.counter(2)} >&#8902;</span>  <small >{this.state.likeCounter2} likes</small>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food3} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Stir - Fry Jollof Spaghetti</b><br />
                                <small>TasteClan Resturant</small><br />
                                <span onClick={() => this.counter(3)} >&#8902;</span> <small >{this.state.likeCounter3} likes</small>
                            </figcaption>
                        </figure>
                        <Link to="/menu"><button>View More</button></Link>
                    </div>
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

