import React from 'react'
import Icon from './pictures/Icon.svg';

function footer() {
    return (

            <div className="credits">
                <img src={Icon} alt="Logo" className="logo" />
                <p>Healthy You</p>
                <small>&copy;copyright 2020 TasteClan All Right Reserved</small>
            </div>
    )
}

export default footer
