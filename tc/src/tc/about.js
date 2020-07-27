import React from 'react'
import Menubar from './menubar';
import Credits from './footer';


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
                </div>
            </div>
            <Credits />
            </div>
    )
}

export default about

