import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
          <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              Home
            </Link>
            <p className="flow-text grey-text text-darken-1">
              
            </p>
            <br />
            <div className="col s2.4">
              <Link
                to="/registerd"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
               Donor
              </Link>
            </div>
            <div className="col s2.4">
              
            </div>
            <div className="col s2.4">
              <Link
                to="/registerr"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Recipient
              </Link>
            </div>
            <div className="col s2.4">
              
            </div>
            <div className="col s2.4">
              <Link
                to="/registerv"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;