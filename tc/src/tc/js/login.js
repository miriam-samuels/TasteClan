// Do not forget to change how ypu imported the svg file
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Fb from '../pictures/Social/Face_book.svg';
import G from '../pictures/Social/Google.svg';
import Blob from '../pictures/Blob_1.svg';
import Dot from '../pictures/Dots.svg';
import LogoB from '../pictures/beside.svg';

class login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',

        }
    }
    emailChange = (event) => {
        this.setState(
            { email: event.target.value }
        )
    }
    passChange = (event) => {
        this.setState(
            { password: event.target.value }
        )
    }
    submitForm = (event)=>{
        const {history} = this.props;
        alert("Welcome to TasteClan");
        history.push('./');
        event.preventDefault()
    }

    render() {
        return (
            <div className="wrapper">
                <img src ={Dot} alt=""className ="dots"/>
            <div className="login">
                <img src ={Blob} alt=""className ="blob3"/>  
                <div className="fbd">
                <img src ={LogoB} alt=""className ="logoB"/>
                    <form onSubmit = {this.submitForm} >
                        <input type="email" value={this.state.username} placeholder="email address" onChange={this.emailChange} required />
                        <input type="password" value={this.state.password} placeholder="password" onChange={this.passChange} required autoComplete="off"/>
                        {/* eslint-disable-next-line */}
                        <p><Link to=""> Forgot password </Link></p>
                        <button type="submit" className="submit">Login Now</button>
                        <p>Don't have an account ? <Link to = "./Reg" className="sign">Sign Up</Link></p>
                        <button ><img src = {Fb} alt ="fb" className="social"/>Continue with Facebook</button>
                        <button><img src = {G} alt ="g" className="social"/>Continue with Google</button>
                    </form>
                </div>
                <img src ={Blob} alt="" className ="blob4"/>            
                <svg width="24" height="15" viewBox="0 0 124 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="sticker">
                    <path d="M60.7991 0.706965H0V11.3822H24.0369V50.1946H36.7623V11.3822H60.7991V0.706965Z" fill="#FE724E" />
                    <path d="M61.9286 25.3801C61.9286 41.8524 71.2606 50.9016 93.0351 50.9016C112.76 50.9016 122.657 43.3371 123.93 28.9856H110.992C109.79 37.0451 103.569 40.2264 93.0351 40.2264C80.1684 40.2264 74.654 35.5604 74.654 25.3801C74.654 15.2705 80.0977 10.6752 93.0351 10.6752C103.64 10.6752 109.79 13.7858 110.992 21.7746H123.93C122.657 7.49385 112.76 0 93.0351 0C71.2606 0 61.9286 8.97848 61.9286 25.3801Z" fill="#FE724E" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M121.173 75H5.81567V66.0158H121.173V75Z" fill="#FE724E" />
                </svg>
            </div>
            </div>
        )
    }
}

export default login
