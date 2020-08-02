import React from 'react'
import { Link } from 'react-router-dom';
import Menubar from './menubar';
import Res from '../pictures/Restaurant.svg';
import Delivery from '../pictures/Delivery Man.svg';
import Credits from './footer';
import Drivers from '../pictures/Partner_With_Us.jpg'

function patner() {
    return (
        <div className="patnerwithus">
            <Menubar />
            <div className="blah">
                <h1>Patner With Us</h1>
                <p>
                    blah blah  blah blah  blah blah  blah blah
                    blah blah  blah blah  blah blah  blah blah
                    blah blah  blah blah  blah blah  blah blah
                </p>
            </div>
            <div className="joinus">
                <div>
                    <img src={Res} alt="" />
                    <h3>For Restaurant</h3>
                    <p>
                        blah blah  blah blah  blah blah  blah blah
                        blah blah  blah blah  blah blah  blah blah
                        blah blah  blah blah  blah blah  blah blah
                </p>
                    <Link to="/addRestaurant" ><button>Add Restaurant</button></Link>
                </div>
                <div>
                    <img src={Delivery} alt="" />
                    <h3>For Driver</h3>
                    <p>
                        blah blah  blah blah  blah blah  blah blah
                        blah blah  blah blah  blah blah  blah blah
                        blah blah  blah blah  blah blah  blah blah
                </p>
                    <Link to="/addDriver" ><button>Add Driver</button></Link>
                </div>

            </div>
            <div className="drivers">
                <img src={Drivers} alt=""/>
            </div>

            <div className="viewRes">
                <h3>Select from your choice restaurant</h3>
                <p>
                    blah blah  blah blah  blah blah  blah blah
                    blah blah  blah blah  blah blah  blah blah
                    blah blah  blah blah  blah blah  blah blah
                </p>
                <button>View Restaurant</button>
            </div>
            <Credits />
        </div>
    )
}

export default patner
