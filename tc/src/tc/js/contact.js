import React from 'react'
import Menubar from './menubar';
import Credits from './footer';
function contact() {
    return (
        <div >
            <Menubar/>
            <div className="contact">
            <div className="getintouch">
            <h3>Get in Touch</h3>
            <p>Call us</p>
            <b>090xxxxxxxxxx, 080xxxxxxxxx, 081xxxxxxxxxxx, 070xxxxxxxxxx</b>
            <p>Email Us</p>
            <b>info.tasteclan@gmail.com</b><br/>
            <b>tasteclan@gmail.com</b>
            <p>Address</p>
            <b>blah blah blah blah blah blah blah blah blah blah blah blah </b>
            </div>
            <div className="msg">
                <form>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" placeholder="enter your name" id="name"/>
                   <br/> <label htmlFor="email">Email Address</label><br/>
                    <input type="email" placeholder="enter your email address" id="email" />
                    <br/><label htmlFor="msg">Your Message</label><br/>
                    <textarea placeholder="enter your message" rows="17" id="msg"></textarea>
                    <button type="submit"> Submit</button>
                </form>
            </div>
            </div>
            <Credits/>  
        </div>
    )
}

export default contact

