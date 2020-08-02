import React, { Component } from 'react';
import Drp from '../pictures/Dropdown.svg';
import Menubar from './menubar';
import Credits from './footer';
import Meal from './orderFoodNearYou';

 class menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
        }
    }
    

    showPanel = () =>{
        if (this.state.show === false) {
        document.querySelector('.filters ul').style.display ="block";
            this.setState({
                show:true,
            })
        }else{
            document.querySelector('.filters ul').style.display ="none";
            this.setState({
                show:false,
            })
        }
    }
    render() {
        return (
            <div>
                <Menubar/>
                <div className="menuIntro">
                    <h2>Menu</h2>
                    <p>Browse through our top and exclusive restaurants
                        where we've gathered foods of the highest quality and
                        freshness. Eacg has full description regarding the food 
                        so that you can know what you are ordering <br/>
                        So, let's start shopping!!!
                    </p>
                </div>
                <div className="menuBody">
                <button className="filter" onClick={this.showPanel}><b>Filters</b></button>
                <b>All Meals</b>
                <img src={Drp} alt=""/>
                <img src={Drp} alt=""/>
                <select>
                    <option>Sort by</option>
                </select>
                <div className="filters">
                    <ul>
                        <li><b>Location</b><br/>
                        <input type="search" placeholder="search your area"/><br/>
                        <input type="checkbox" id="all"/><label htmlFor="all">All</label><br/>
                        <input type="checkbox" id="tc"/><label htmlFor="tc">TasteClan Restaurant</label><br/>
                        <input type="checkbox" id="ss"/><label htmlFor="ss">Sweet Savour</label><br/>
                        <input type="checkbox" id="ggr"/><label htmlFor="ggr">Great Grace Restaurant</label><br/>
                        <input type="checkbox" id="ms"/><label htmlFor="ms">Mega Sensation</label><br/>
                        <input type="checkbox" id="ma"/><label htmlFor="ma">Mama Abiola</label><br/>
                        <input type="checkbox" id="tq"/><label htmlFor="tq">Tinax Quintessese</label><br/>
                        <input type="checkbox" id="am"/><label htmlFor="am">Aluta Market</label><br/>
                        <input type="checkbox" id="sub"/><label htmlFor="sub">S.U.B</label><br/>
                        <input type="checkbox" id="okr"/><label htmlFor="okr">Off K Restaurant</label><br/>
                        </li>
                        <li><b>Category</b><br/>
                        <input type="checkbox" id="bFast"/><label htmlFor="bFast">Breakfast</label><br/>
                        <input type="checkbox" id="lh"/><label htmlFor="lh">Lunch</label><br/>
                        <input type="checkbox" id="dn"/><label htmlFor="dn">Dinner</label><br/>
                        <input type="checkbox" id="caf"/><label htmlFor="caf">Cafe</label><br/>
                        <input type="checkbox" id="dly"/><label htmlFor="dly">Delivery</label><br/>
                        </li>
                        <li><b>Cuisines</b><br/>
                        <input type="checkbox" id="ld"/><label htmlFor="ld">Local Dish</label><br/>
                        <input type="checkbox" id="id"/><label htmlFor="id">Inernational Dish</label><br/>
                        <input type="checkbox" id="ff"/><label htmlFor="ff">Fast Food</label><br/>
                        <input type="checkbox" id="dab"/><label htmlFor="dab">Drinks and Beer</label><br/>
                        <input type="checkbox" id="cat"/><label htmlFor="cat">Coffee and Tea</label><br/>
                        <input type="checkbox" id="fss"/><label htmlFor="fss">Fish, Suya and Samosa</label><br/>
                        </li>
                        <li><b>Offers</b><br/>
                        <input type="checkbox" id="one"/><label htmlFor="one">10% - 25% off</label><br/>
                        <input type="checkbox" id="two"/><label htmlFor="two">30% - 45% off</label><br/>
                        <input type="checkbox" id="three"/><label htmlFor="three">50% - 75% off</label><br/>
                        <input type="checkbox" id="four"/><label htmlFor="four">80% - 95% off</label><br/>
                        </li>
                        <li><b>Ratings</b><br/>
                        <input type="checkbox" id="star5"/><label htmlFor="star5">&#9733;&#9733;&#9733;&#9733;&#9733;</label><br/>
                        <input type="checkbox" id="star4"/><label htmlFor="star5">&#9733;&#9733;&#9733;&#9733;</label><br/>
                        <input type="checkbox" id="star3"/><label htmlFor="star3">&#9733;&#9733;&#9733;</label><br/>
                        <input type="checkbox" id="star2"/><label htmlFor="star2">&#9733;&#9733;</label><br/>
                        <input type="checkbox" id="star1"/><label htmlFor="star1">&#9733;</label><br/>
                        </li>
                    </ul>
                </div>
                <div className="mealList">
                    <Meal/>
                </div>
                </div>
                <Credits/>
            </div>
        )
    }
}

export default menu
