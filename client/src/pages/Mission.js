import React, { Component } from "react";
import API from "../utils/api";
import Container from "../components/Container";
import YourMission from "../components/YourMission";
// import { compose, withProps, lifecycle } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap,DirectionsRenderer} from "react-google-maps"
import Map2 from "../components/Map2";

class Mission extends Component {
    state = {
        missions: [],
        pos:{}
    };

    //when this component mounts, grab all Missions that were save to the database 
    componentDidMount() {
        API.getMissions()
            .then(res => this.setState({ missions: res.data }))
            .catch(err => console.log(err))
        this.getCoordinates();

       
                
    };

    getCoordinates(){

        navigator.geolocation.getCurrentPosition( (position) => {
            console.log(position)
            this.setState({ pos: position })})
    };



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <h3 className="center">Current Mission:</h3>
                        <Container>
                            <YourMission missions ={this.state.missions} />
                            <Map2 pos ={this.state.pos}/>
                        </Container>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default Mission


