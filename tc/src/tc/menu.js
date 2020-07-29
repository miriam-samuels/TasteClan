import React, { Component } from 'react'
import Menubar from './menubar';
import Credits from './footer';

 class menu extends Component {
    render() {
        return (
            <div>
                <Menubar/>
                <Credits/>
            </div>
        )
    }
}

export default menu
