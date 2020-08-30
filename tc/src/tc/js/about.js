import React from 'react'
import Menubar from './menubar';
import Credits from './footer';
import Img1 from '../pictures/About_Pic1.jpg';
import Img2 from '../pictures/About_Pic2.jpg';
import Img3 from '../pictures/About_Pic3.jpg';
import Img4 from '../pictures/About_Pic4.jpg';
import Team1 from '../pictures/Team (1).JPG';
import Team2 from '../pictures/Team (2).JPG';
import Team3 from '../pictures/Team (3).JPG';
import Team4 from '../pictures/Team (4).JPG';


function about() {
    return (
        <div>
            <Menubar />
            <div className="about">
                <div className="fewWords">
                    <h4>A Few Words About TasteClan</h4>
                    <p>
                        blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah blah

    </p><br />
                    <p>
                        blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah blah

    </p>
                </div>
                <div className="ourStory">
                    <h4>Our Story</h4>
                    <figure>
                       <div><img src={Img1} alt=""/></div> 
                        <figcaption>
                            <h4>Ideas</h4>
                            <p>It all started fro a single idea. We wanted to create a place that
                                will offer it's customers easy ordering and delivery of their favourite dishes
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="reverse">
                    <div><img src={Img2} alt=""/></div>
                        <figcaption>
                            <h4>Develop</h4>
                            <p>The website was first designed and developed in order to help students get their food easily
                             .It required a lot of cooperation and team work to get it done
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                    <div><img src={Img3} alt=""/></div>
                        <figcaption>
                            <h4>Launchimg</h4>
                            <p>After undergoing to necessary preparations to launch TasteClan. We needed to get more experienced
                                people on our side to ensure a safe and continuous progress
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="reverse">
                    <div><img src={Img4} alt=""/></div>
                        <figcaption>
                            <h4>Today</h4>
                            <p>We are more devoted and dedicated to our customers, making sure we provide all services
                                 promised and even more to create a good customer experience for all.
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="counter">
                <figure>
                    <figcaption>
                    <h2>0</h2><hr/>
                    <b>Orders</b>
                    </figcaption>
                </figure>
                <figure>
                    <figcaption>
                    <h2>0</h2><hr/>
                    <b>Delivered</b>  
                    </figcaption>
                </figure>
                <figure>
                    <figcaption>
                    <h2>0</h2><hr/>
                    <b>Clients </b>
                    </figcaption>
                </figure>
            </div>
            <div className="ourTeam">
                <h3>Our Team</h3>
                <div>
            <figure>
            <img src={Team3} alt=""/>
                    <figcaption>
                    <b>Ayomide</b>
                    <p>Orders Made</p>
                    </figcaption>
                </figure>
                <figure>
                <img src={Team1} alt=""/>
                    <figcaption>
                    <b>Fola</b>
                    <p>Food Delivered</p>  
                    </figcaption>
                </figure>
                <figure>
                <img src={Team2} alt=""/>
                    <figcaption>
                    <b>Miriam</b>
                    <p>Clients </p>
                    </figcaption>
                </figure>
                <figure>
                <img src={Team4} alt=""/>
                    <figcaption>
                    <b>Bami</b>
                    <p>Clients </p>
                    </figcaption>
                </figure>
                {/* <figure>
                <img src={Img4} alt=""/>
                    <figcaption>
                    <b>Ire</b>
                    <p>Clients </p>
                    </figcaption>
                </figure>
                <figure>
                <img src={Img4} alt=""/>
                    <figcaption>
                    <b>Nifemi</b>
                    <p>Clients </p>
                    </figcaption>
                </figure>
                <figure>
                <img src={Img4} alt=""/>
                    <figcaption>
                    <b>Demi</b>
                    <p>Clients </p>
                    </figcaption>
                </figure>*/}
                </div> 
            </div>
            <div className="quote">
                <h3>Nees a Food Scientist expertise</h3>
                <button>Get a Quote</button>
            </div>
            <Credits />
        </div>
    )
}

export default about

