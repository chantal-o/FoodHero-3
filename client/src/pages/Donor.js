import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import classnames from "classnames";

class Dashboard extends Component {

  // Define "submit" function
  submitFood = () => {

  };

  // Button Functions
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onSubmitClick = e => {
    e.preventDefault();
    this.props.submitFood();
  };

render() {
  const { user } = this.props.auth;
  const { errors } = this.state;

  return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">

            {/* Form */}
            <h4>Submit an Item!</h4>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.itemname}
                error={errors.itemname}
                id="itemname"
                type="text"
                className={classnames("", {
                  invalid: errors.itemname
                })}
              />
              <label htmlFor="itemname">Item Name</label>
              <span className="red-text">{errors.itemname}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.numberofunits}
                error={errors.numberofunits}
                id="numberofunits"
                type="number"
                className={classnames("", {
                  invalid: errors.numberofunits
                })}
              />
              <label htmlFor="numberofunits">Number of Units (Please input a number!)</label>
              <span className="red-text">{errors.numberofunits}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.description}
                error={errors.description}
                id="description"
                type="text"
                className={classnames("", {
                  invalid: errors.description
                })}
              />
              <label htmlFor="description">Description</label>
              <span className="red-text">{errors.description}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.shelflife}
                error={errors.shelflife}
                id="shelflife"
                type="text"
                className={classnames("", {
                  invalid: errors.shelflife
                })}
              />
              <label htmlFor="shelflife">Shelf Life</label>
              <span className="red-text">{errors.shelflife}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.pickuptime}
                error={errors.pickuptime}
                id="pickuptime"
                type="text"
                className={classnames("", {
                  invalid: errors.pickuptime
                })}
              />
              <label htmlFor="pickuptime">Pickup Time (Please use 24-hour time with the xx:xx format!)</label>
              <span className="red-text">{errors.pickuptime}</span>
            </div>

            {/* Submit Button */}
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onSubmitClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Submit
            </button>

            {/* Logout Button */}
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
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);