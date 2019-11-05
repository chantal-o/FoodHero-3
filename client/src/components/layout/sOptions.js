import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            {/* <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4> */}
            <p className="flow-text grey-text text-darken-1">
              
            </p>
            <br />
            <div className="col s2.4">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable #607d8b blue-grey
                accent-3"
              >
               Donor
              </Link>
            </div>
            <div className="col s2.4">
              
            </div>
            <div className="col s2.4">
              <Link
                to="/loginr"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable #607d8b blue-grey
                accent-3"
              >
                Recipient
              </Link>
            </div>
            <div className="col s2.4">
              
            </div>
            <div className="col s2.4">
              <Link
                to="/loginv"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable #607d8b blue-grey
                accent-3"
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