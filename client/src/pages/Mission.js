import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
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
    }


    render() {
        return (
            <Container fluid className="container">
                <Container>
                    <MissionList missions ={this.state.missions} />
                </Container>
            </Container>
        )
    }
}



export default Mission


