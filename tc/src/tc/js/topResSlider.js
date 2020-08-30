import { Link } from 'react-router-dom';
import React, { Component } from 'react'

// const slide = document.getElementById("slider");
class topResSlider extends Component {
    prev = () =>{ 
        const slide = document.getElementById("slider");
        slide.scrollBy(-220,0);
    }
    next = () =>{
        const slide = document.getElementById("slider");
        slide.scrollBy(220,0);
    }
    render() {
        return (
            <>
            <h2>Top Restaurants </h2>

            <div className="slider" >
                <div id="slider">
                <button className="prev" onClick={this.prev}>&#10094;</button>            
                <ul>
                    <li><Link to=""><b>&spades;</b> Savour</Link></li>
                    <li><Link to=""><b>&clubs;</b> Chapters</Link></li>
                    <li><Link to=""><b>&diams;</b> Lezcan</Link></li>
                    <li><Link to=""><b>&hearts;</b> Mega</Link></li>
                    <li><Link to=""><b>&#9733;</b> Savour</Link></li>
                </ul>
                <button className="next" onClick={this.next}>&#10095;</button>
                </div>
            </div>

        </>
        )
    }
}

export default topResSlider

