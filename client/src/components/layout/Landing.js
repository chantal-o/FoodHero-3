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
            <img src={"https://drive.google.com/uc?id=1hDTVxF7179YjSl_T5tdSTjxEvuyYY2Ub"} alt="Food Hero Logo" width="300px" />
            <div className="section">
            <Link
                to="/roptions"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Register
            </Link>
            <Link
                to="/login"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Log In
            </Link>
          </div>
            </p>
            <br />
            {/* <div className="col s4s">
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
            <div className="col s4">
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
            <div className="col s4">
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
              </Link> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;