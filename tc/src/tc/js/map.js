import React, { Component } from 'react'
import {Map, GoogleApiWrapper, Marker,InfoWindow} from 'google-maps-react';

const mapStyles={
     width:'60%',
     height:'40%',
}
class map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            infoWindow:false,
            activeMarker:{},
            selectedPlace:{}
        };
    }

    onMClick= (props,marker,e) =>{
        this.setState({
            infoWindow:true,
            activeMarker:marker,
            selectedPlace:props
        });
    };
    onClose = props =>{
        if (this.state.infoWindow) {
            this.setState({
                infoWindow:false,
                activeMarker:null
            });
        }
    };
    componentDidMount(){
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
    

            }, function (error) {
                console.error(`Error Code =  ${error.code} - ${error.message} `);

            });
        }
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
            
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longtitude is :", position.coords.longitude);
            });
        }
    }
    render() {
        return (
            <div  id="map">
            <Map
           
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter = {
                {lat:6.4474, lng:3.3903}
            }>
                {/* {this.displayMarkers()} */}
            <Marker
            onClick={this.onMClick}
            name={'ogun'} />
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.infoWindow}
            onClose={this.onClose}>
                <h4>{this.state.selectedPlace.name}</h4></InfoWindow>
    </Map>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyCBcoXEeaXOHrgGA5YUOg1OHTbV5RWJvXY'
            })(map);
