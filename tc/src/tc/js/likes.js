import React, { Component } from 'react'

export class likes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             likes:0,
             liked: false,
             color:"#000",
        }
    }
    inc =() =>{
        if (this.state.liked) {
            this.setState(prevState =>({
                likes: prevState.likes - 1,
                liked: false,
                color:"#000",
            }));
            
        } else {
            this.setState(prevState =>({
                likes: prevState.likes + 1,
                liked: true,
                color:"#fe724e",
            }));
        }

    };
    render() {
        const styles={
            position:"relative",
            color: this.state.color,
            display: "inline-block",
            fontSize: "30px",
            fontWeight: "bolder",
            textAlign: "left",
            backgroundColor:"transparent",
            border:"none",
            width:"90%",
            
        }
        const em={
            position:"absolute",
            bottom:"30%",
            right:"3%"
        }
        return (
            <>
        <span onClick={(e) => this.inc(6)}style={styles}>&hearts;<em style={em}>{this.state.likes} likes</em></span> 
                
            </>
        )
    }
}

export default likes
