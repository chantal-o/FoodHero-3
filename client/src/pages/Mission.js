import React, { Component } from "react";
import API from "../utils/api";
import Container from "../components/Container";
import MissionList from "../components/MissionList";

class Mission extends Component {
    state = {
        missions: []
    };

    //when this component mounts, grab all Missions that were save to the database 
    componentDidMount() {
        API.getMissions()
            .then(res => this.setState({ missions: res.data }))
            .catch(err => console.log(err))
    };


    render() {
        return (
                <Container>
                    <MissionList missions ={this.state.missions} />
                </Container>
            
        )
    }
};



export default Mission


