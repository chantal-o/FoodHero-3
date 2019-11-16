import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Container from "../components/Container";
import MissionList from "../components/MissionList";
import API from "../utils/api";

class Mission extends Component {
  state = {
    food: [],
    usertype: "Recipient"
  };

  componentDidMount() {
    API.getMissions()
    .then(res => this.setState({ donations: res.data }))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <h4>These Items are Currently Available for Delivery!</h4>

            {/* Mission Table */}
            <Container>
              <DonationList donations={this.state.donations} />
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
)(Mission);