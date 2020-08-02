import React, { Component } from 'react'
import Food1 from '../pictures/FOOD_01.jpg';
import Food2 from '../pictures/FOOD_02.jpg';
import Food3 from '../pictures/FOOD_03.jpg';
import Food4 from '../pictures/FOOD_04.jpg';
import Food5 from '../pictures/FOOD_05.jpg';
import Food6 from '../pictures/FOOD_06.jpg';

export class likes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            likeCounter1: 0,
            likeCounter2: 0,
            likeCounter3: 0,
            likeCounter4: 0,
            likeCounter5: 0,
            likeCounter6: 0,
            liked1:false,
            liked2:false,
            liked3:false,
            liked4:false,
            liked5:false,
            liked6:false,
        }
    }
    counter = (counter) => {
        if (this.state[`liked${counter}`]) {
            this.setState((prevState) => ({
                [`likeCounter${counter}`]: prevState[`likeCounter${counter}`] - 1,
                [`liked${counter}`]:false,
            }));
        }
        else{
            this.setState((prevState) => ({
                [`likeCounter${counter}`]: prevState[`likeCounter${counter}`] + 1,
                [`liked${counter}`]:true,
            }));
        }
    }
    render() {
        const styles={
            color: "#000",
            display: "inline-block",
            fontSize: "25px",
            fontWeight: "bolder",
            textAlign: "left",
            margin:"-9px",
            
        }
        return (
            <div>
                        <figure>
                            <img src={Food1} alt="" />
                            <figcaption>
                                <p>Price &#8358;1500 </p>
                                <b>Jollof Rice With Chicken</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(1)}style={styles}> &#8902; <em>{this.state.likeCounter1} likes</em></span> 
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food2} alt="" />
                            <figcaption>
                                <p>Price &#8358;500 </p>
                                <b>Chili Hot Dog With Sauce</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(2)}style={styles}>&#8902; <em>{this.state.likeCounter2} likes</em></span>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food3} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Stir-Fried Jollof Spaghetti</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(3)}style={styles}>&#8902; <em>{this.state.likeCounter3} likes</em></span> 
                            </figcaption>
                        </figure>
                    <span className="menus">
                    <figure>
                            <img src={Food4} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Hamburger and French Fries</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(4)}style={styles}>&#8902; <em>{this.state.likeCounter4} likes</em></span> 
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food5} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Chili Sauced Chicken Pizza</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(5)}style={styles}>&#8902; <em>{this.state.likeCounter5} likes</em></span> 
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food6} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Fried Chicken and French Fries</b><br />
                                <em>TasteClan Resturant</em><br />
                                <span onClick={() => this.counter(6)}style={styles}>&#8902; <em>{this.state.likeCounter6} likes</em></span> 
                            </figcaption>
                        </figure>
                    </span>
            </div>
        )
    }
}

export default likes
