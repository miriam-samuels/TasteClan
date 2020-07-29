import React, { Component } from 'react'
import Menubar from './menubar';
import Credits from './footer';
import FillForm from './pictures/Fill Form.svg';
import Res from './pictures/Restaurant.svg';
import SendInfo from './pictures/Send Information.svg';
import Verify from './pictures/Verify Information.svg';



class addRestaurant extends Component {
    render() {
        return (
            <div  className="addRestaurant">
                <Menubar/>
                <div className="restaurantInfo">
                    <img src={Res} alt=""  className="addRes" />
                    <h2  className="addRes">Add Restaurant</h2>
                <form>
                   <br/> <b>Basic Info</b><br/>
                <br/><label>Restaurant Name*</label><br/>
                <input type="text" placeholder="enter restaurant name" required />
                <br/><label>city*</label><br/>
                <select>
                    <option>Lagos</option><option>Akure</option> <option>Kano</option>
                    <option>Ibadan</option> <option>Benin</option> <option>Port Harcourt</option>
                    <option>Jos</option> <option>Illorin</option> <option>Abuja</option>
                    <option>Enugu</option> <option>Kaduna</option> <option>Owo</option>
                    <option>Osun</option> <option>Ekiti</option> <option>Abeokuta</option>
                </select>
                <br/><label>Are you the owner or manager of the place*</label><br/>
                <input type="checkbox" id="owner"/><label for="owner"> i'm the owner</label>
                <input type="checkbox" id="manager"/><label for="manager">i'm the manager</label>
               <br/> <b>Contact Info</b><br/>
                <br/><label>Email Address</label><br/>
                <input type="email" placeholder="enter restaurant email address" required/>
                <br/><label>Phone Number*</label><br/>
                <input type="tel" placeholder="enter work number" required/>
                <br/><label>Restaurant Phone Number*</label><br/>
                <input type="tel" placeholder="enter office number" required/>   
                <br/><label>Restaurant Website</label><br/>
                <input type="url" placeholder="enter restaurant website url"/>
                <br/><label>Open Status</label><br/>      
                <input type="checkbox" id="open"/><label for="open">This place is already open</label>
                <input type="checkbox" id="soon"/><label for="soon">This place is opening soon</label>
               <br/> <b>Timing</b><br/>
                <br/><label>Add Days*</label><br/>
                <input type="checkbox"id="mon"/><label for="mon">mon</label><input type="checkbox"id="tue"/><label for="tue">tue</label>
                <input type="checkbox"id="wed"/><label for="wed">wed</label><input type="checkbox"id="thur"/><label for="thur">thur</label>
                <input type="checkbox"id="fri"/><label for="fri">fri</label><input type="checkbox"id="sat"/><label for="sat">sat</label>
                <input type="checkbox"id="sun"/><label for="sun">sun</label>
                <br/><label for="from">From*</label><label for="to">To*</label><br/>
                <input type="time"id="from" /><input type="time" id="to"/> <button>Add Time</button>
               <br/> <b>Location</b><br/>
                <br/><label>Enter Address*</label><br/>
                <input type="search" placeholder="enter your address" />
               <br/> <b>Characteristics</b><br/>
                <br/><label>Services*</label><br/>
                <input type="checkbox"id="bf"/><label for="bf">Breakfast</label><input type="checkbox"id="lunch"/><label for="lunch">Lunch</label>
                <input type="checkbox"id="dinner"/><label for="dinner">Dinner</label><input type="checkbox"id="cafe"/><label for="cafe">Cafe</label>
                <br/><label>Alchohol*</label><br/>
                <input type="checkbox"id="serve"/><label for="serve">Serve</label><input type="checkbox"id="noserve"/> <label for="noserve">Don't Serve</label>
                <br/><label>Seating*</label><br/>
                <input type="checkbox"id="available"/><label for="available">Available</label><input type="checkbox"id="noavailable"/> <label for="noavailable">Not Available</label>
                <br/><label>Cuisines*</label><br/>
                <select>
                    <option>Lagos</option><option>Akure</option> <option>Kano</option>
                    <option>Ibadan</option> <option>Benin</option> <option>Port Harcourt</option>
                    <option>Jos</option> <option>Illorin</option> <option>Abuja</option>
                    <option>Enugu</option> <option>Kaduna</option> <option>Owo</option>
                    <option>Osun</option> <option>Ekiti</option> <option>Abeokuta</option>
                </select>
                <br/><label>Tags*</label><br/>
                <select>
                    <option>Lagos</option><option>Akure</option> <option>Kano</option>
                    <option>Ibadan</option> <option>Benin</option> <option>Port Harcourt</option>
                    <option>Jos</option> <option>Illorin</option> <option>Abuja</option>
                    <option>Enugu</option> <option>Kaduna</option> <option>Owo</option>
                    <option>Osun</option> <option>Ekiti</option> <option>Abeokuta</option>
                </select>
               <br/> <b>Payments</b><br/>
                <br/><label>Payment Method*</label><br/>
                <input type="checkbox"id="cash"/><label for="cash">Cash only</label>    <input type="checkbox"id="cashcard"/><label for="cashcard">Cash/Card</label> 
                <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="addProcess">
                    <h2>How it Works</h2>
                    <img src={FillForm} alt="" />
                   <br/> <b>Fill Form</b><br/>
                    <p>blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    </p>
                    <img src={SendInfo} alt="" />
                   <br/> <b>Send Information</b><br/>
                    <p>blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah 
                    </p>
                    <img src={Verify} alt="" />
                   <br/> <b>Verify Information</b><br/>
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

export default addRestaurant
