import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Container from "../components/Container";
import DonationList from "../components/DonationList";
import API from "../utils/api";

class Donation extends Component {
  state = {
    donations:[],
    usertype: "Recipient"
  };

  componentDidMount() {
    API.getDonations()
    .then(res => this.setState({ donations: res.data }))
    .catch(err => console.log(err))
  };
  
  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };
  
  render() {
    console.log(this.state.usertype);
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <h4>These Items are Currently Available for Delivery!</h4>

            {/* Food Table */}
            <Container>
              <DonationList donations={this.state.donations} />
            </Container>
          </div>
        </div>
        
        {/* Logout Button */}
        {/* <div className="row">
          <div className="col s8 offset-s2">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

          </div>
        </div> */}
      </div>
    );
  }
}

Donation.propTypes = {
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
)(Donation);