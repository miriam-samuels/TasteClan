import React from 'react'
import Cart from '../pictures/cart.svg'
import { Link } from 'react-router-dom';

function orderCart() {
    return (
        <div className="ordercart">
           <Link to="/menu"> <img src={Cart} alt=""/></Link>
        </div>
    )
}

export default orderCart
