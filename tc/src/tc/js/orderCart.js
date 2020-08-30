import React from 'react'
// import Cart from '../pictures/cart.svg'
// import { Link } from 'react-router-dom';


function orderCart() {
    return (
        <div className="ordercart" onClick={() => {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}>
         &#8743;
         {/* <img src={Cart} alt=""  />   */}
        </div>
    )
}

export default orderCart
