import React, { Component } from 'react'
import Menubar from './menubar';
import Credits from './footer';
import FillForm from '../pictures/Fill Form.svg';
import Delivery from '../pictures/Delivery Man.svg';
import SendInfo from '../pictures/Send Information.svg';
import Verify from '../pictures/Verify Information.svg';
import Map from './map';



class addDriver extends Component {
    render() {
        return (
            <div className="addDriver">
                <Menubar />
                <div className="driverInfo side">
                    <img src={Delivery} alt="" className="addDri" />
                    <h2 className="addDri">Add Driver</h2>
                    <form>
                        <br /> <b>Basic Info</b><br />
                        <br /><label>Driver Name*</label><br />
                        <input type="text" placeholder="enter name" required />
                        <br /><label>city*</label><br />
                        <select>
                            <option>Lagos</option><option>Akure</option> <option>Kano</option>
                            <option>Ibadan</option> <option>Benin</option> <option>Port Harcourt</option>
                            <option>Jos</option> <option>Illorin</option> <option>Abuja</option>
                            <option>Enugu</option> <option>Kaduna</option> <option>Owo</option>
                            <option>Osun</option> <option>Ekiti</option> <option>Abeokuta</option>
                        </select>
                        <br /> <b>Contact Info</b><br />
                        <br /><label>Email Address</label><br />
                        <input type="email" placeholder="enter email address" required />
                        <br /><label>Phone Number*</label><br />
                        <input type="tel" placeholder="enter work number" required />
                        <br /><label>Do you have a bike or vehicle</label><br />
                        <input type="checkbox" id="yes" /><label htmlFor="yes">Yes i have</label>
                        <input type="checkbox" id="soon" /><label htmlFor="soon">Buying soon</label>
                        <br /> <b>Timing</b><br />
                        <br /><label>Add Days*</label><br />
                        <input type="checkbox" id="mon" /><label htmlFor="mon">mon</label><input type="checkbox" id="tue" /><label htmlFor="tue">tue</label>
                        <input type="checkbox" id="wed" /><label htmlFor="wed">wed</label><input type="checkbox" id="thur" /><label htmlFor="thur">thur</label>
                        <input type="checkbox" id="fri" /><label htmlFor="fri">fri</label><input type="checkbox" id="sat" /><label htmlFor="sat">sat</label>
                        <input type="checkbox" id="sun" /><label htmlFor="sun">sun</label>
                        <br /><label htmlFor="from">From*</label><label htmlFor="to">To*</label><br />
                        <input type="time" id="from" /><input type="time" id="to" /> <button>Add Time</button>
                        <br /> <b>Location</b><br />
                        <br /><label>Enter Address*</label><br />
                        <input type="search" placeholder="enter your address" />
                        <Map/>
                        <br /> <b>More Details</b><br />
                        <br /><label>Working Details*</label><br />
                        <input type="checkbox" id="three" /><label htmlFor="three">Work under 3km</label><input type="checkbox" id="five" /><label htmlFor="five">Work under 5km</label>
                        <br /><label>Earning*</label><br />
                        <input type="checkbox" id="order" /><label htmlFor="order">Every order</label><input type="checkbox" id="monthly" /> <label htmlFor="monthly">Monthly salary</label>
                        <br /><label>Registered by Company*</label><br />
                        <input type="checkbox" id="uber" /><label htmlFor="uber">Uber</label><input type="checkbox" id="OPay" /> <label htmlFor="OPay">Opay</label>
                        <input type="checkbox" id="max" /> <label htmlFor="max">MaxOkada</label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="addProcess side">
                    <h2>How it Works</h2>
                    <img src={FillForm} alt="" />
                    <br /> <b>Fill Form</b><br />
                    <p>blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    </p>
                    <img src={SendInfo} alt="" />
                    <br /> <b>Send Information</b><br />
                    <p>blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    </p>
                    <img src={Verify} alt="" />
                    <br /> <b>Verify Information</b><br />
                    <p>blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah
                    </p>
                </div>
                <Credits />
            </div>
        )
    }
}

export default addDriver
