import React from 'react'
import Likes from './likes.js'
import Food1 from '../pictures/FOOD_01.jpg';
import Food2 from '../pictures/FOOD_02.jpg';
import Food3 from '../pictures/FOOD_03.jpg';
import Food4 from '../pictures/FOOD_04.jpg';
import Food5 from '../pictures/FOOD_05.jpg';
import Food6 from '../pictures/FOOD_06.jpg';



function mealList() {
        return (
            <>
                        <figure>
                            <img src={Food1} alt="" />
                            <figcaption>
                                <p>Price &#8358;1500 </p>
                                <b>Jollof Rice With Chicken</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food2} alt="" />
                            <figcaption>
                                <p>Price &#8358;500 </p>
                                <b>Chili Hot Dog With Sauce</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food3} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Stir-Fried Jollof Spaghetti</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                    <span className="menus">
                    <figure>
                            <img src={Food4} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Hamburger and French Fries</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food5} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Chili Sauced Chicken Pizza</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={Food6} alt="" />
                            <figcaption>
                                <p>Price &#8358;1000 </p>
                                <b>Fried Chicken and French Fries</b><br />
                                <em>TasteClan Resturant</em><br />
                                <Likes/>
                            </figcaption>
                        </figure>
                    </span>
            </>
        )
    }


export default mealList
