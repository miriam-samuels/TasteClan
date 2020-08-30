import React, { Component } from 'react'
import { Link } from 'react-router-dom';

var slideIndex = 0;

export class customerReview extends Component {
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
            <div className="review">
                <div className="btns">
                    <button className="prev" onClick={() => this.showSlides(slideIndex += -1)}>&#10094;</button>

                    <button className="next" onClick={() => this.showSlides(slideIndex += 1)}>&#10095;</button>
                </div>
                <div className="slider">
                    <h3>What Customer say about us</h3>
                    <ul>
                        <li className="mySlides">
                            <b> The food  an absolutely wonder, the awesome presentation was indeed
                        a sight to behold</b>
                            <b className="hidden">I really don't have much to say but keep up the fantastic work</b>
                        </li>
                        <li className="mySlides">
                            <b>The food was delicous and i plan to patronize a lot more times in
                        the nearest future</b>
                            <b className="hidden">Words can't express the joy i felt the first time i tried TC services but now am a usual custmer</b>

                        </li>
                        <li className="mySlides">
                            <b> Good customer service, sectacular food and a very hygenic package. What else
                        could i ask for.</b>
                            <b className="hidden">Top notch food nice presentation, i could go on forever if this comment didn't have limited words hahaha </b>

                        </li>
                    </ul>
                    <Link to="/comments"> <button>Comment</button></Link>
                </div>
            </div>
        )
    }
}

export default customerReview

