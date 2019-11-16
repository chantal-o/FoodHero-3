import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Container from "../components/Container";
import YourMission from "../components/YourMission";
import API from "../utils/api";
import Button from "../components/Button";
import { Link, withRouter } from "react-router-dom";

class Mission extends Component {
  state = {
    missions: [],
    usertype: "Volunteer"
  };

  componentDidMount() {
    API.getMissions()
    .then(res => this.setState({ missions: res.data }))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <h4>These Deilvery Missions are Currently Available!</h4>

            {/* Mission Table */}
            <Container>
              <YourMission missions={this.state.missions} />
              <Button>
              <Link to="/mission" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> To Mission
            </Link>
              </Button>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

Mission.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Mission));